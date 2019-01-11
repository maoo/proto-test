/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.org = (function() {

    /**
     * Namespace org.
     * @exports org
     * @namespace
     */
    var org = {};

    org.finos = (function() {

        /**
         * Namespace finos.
         * @memberof org
         * @namespace
         */
        var finos = {};

        finos.fo = (function() {

            /**
             * Namespace fo.
             * @memberof org.finos
             * @namespace
             */
            var fo = {};

            fo.Contact = (function() {

                /**
                 * Properties of a Contact.
                 * @memberof org.finos.fo
                 * @interface IContact
                 */

                /**
                 * Constructs a new Contact.
                 * @memberof org.finos.fo
                 * @classdesc Represents a Contact.
                 * @implements IContact
                 * @constructor
                 * @param {org.finos.fo.IContact=} [properties] Properties to set
                 */
                function Contact(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new Contact instance using the specified properties.
                 * @function create
                 * @memberof org.finos.fo.Contact
                 * @static
                 * @param {org.finos.fo.IContact=} [properties] Properties to set
                 * @returns {org.finos.fo.Contact} Contact instance
                 */
                Contact.create = function create(properties) {
                    return new Contact(properties);
                };

                /**
                 * Encodes the specified Contact message. Does not implicitly {@link org.finos.fo.Contact.verify|verify} messages.
                 * @function encode
                 * @memberof org.finos.fo.Contact
                 * @static
                 * @param {org.finos.fo.IContact} message Contact message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Contact.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified Contact message, length delimited. Does not implicitly {@link org.finos.fo.Contact.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.finos.fo.Contact
                 * @static
                 * @param {org.finos.fo.IContact} message Contact message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Contact.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Contact message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.finos.fo.Contact
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.finos.fo.Contact} Contact
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Contact.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.finos.fo.Contact();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Contact message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.finos.fo.Contact
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.finos.fo.Contact} Contact
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Contact.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Contact message.
                 * @function verify
                 * @memberof org.finos.fo.Contact
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Contact.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a Contact message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.finos.fo.Contact
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.finos.fo.Contact} Contact
                 */
                Contact.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.finos.fo.Contact)
                        return object;
                    return new $root.org.finos.fo.Contact();
                };

                /**
                 * Creates a plain object from a Contact message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.finos.fo.Contact
                 * @static
                 * @param {org.finos.fo.Contact} message Contact
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Contact.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this Contact to JSON.
                 * @function toJSON
                 * @memberof org.finos.fo.Contact
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Contact.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Contact.Id = (function() {

                    /**
                     * Properties of an Id.
                     * @memberof org.finos.fo.Contact
                     * @interface IId
                     * @property {string|null} [email] Id email
                     * @property {string|null} [twitter] Id twitter
                     * @property {string|null} [phone] Id phone
                     */

                    /**
                     * Constructs a new Id.
                     * @memberof org.finos.fo.Contact
                     * @classdesc Represents an Id.
                     * @implements IId
                     * @constructor
                     * @param {org.finos.fo.Contact.IId=} [properties] Properties to set
                     */
                    function Id(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Id email.
                     * @member {string} email
                     * @memberof org.finos.fo.Contact.Id
                     * @instance
                     */
                    Id.prototype.email = "";

                    /**
                     * Id twitter.
                     * @member {string} twitter
                     * @memberof org.finos.fo.Contact.Id
                     * @instance
                     */
                    Id.prototype.twitter = "";

                    /**
                     * Id phone.
                     * @member {string} phone
                     * @memberof org.finos.fo.Contact.Id
                     * @instance
                     */
                    Id.prototype.phone = "";

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @function create
                     * @memberof org.finos.fo.Contact.Id
                     * @static
                     * @param {org.finos.fo.Contact.IId=} [properties] Properties to set
                     * @returns {org.finos.fo.Contact.Id} Id instance
                     */
                    Id.create = function create(properties) {
                        return new Id(properties);
                    };

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link org.finos.fo.Contact.Id.verify|verify} messages.
                     * @function encode
                     * @memberof org.finos.fo.Contact.Id
                     * @static
                     * @param {org.finos.fo.Contact.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.email != null && message.hasOwnProperty("email"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
                        if (message.twitter != null && message.hasOwnProperty("twitter"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.twitter);
                        if (message.phone != null && message.hasOwnProperty("phone"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.phone);
                        return writer;
                    };

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link org.finos.fo.Contact.Id.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof org.finos.fo.Contact.Id
                     * @static
                     * @param {org.finos.fo.Contact.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.finos.fo.Contact.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.finos.fo.Contact.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.finos.fo.Contact.Id();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.email = reader.string();
                                break;
                            case 2:
                                message.twitter = reader.string();
                                break;
                            case 3:
                                message.phone = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.finos.fo.Contact.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.finos.fo.Contact.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Id message.
                     * @function verify
                     * @memberof org.finos.fo.Contact.Id
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Id.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.email != null && message.hasOwnProperty("email"))
                            if (!$util.isString(message.email))
                                return "email: string expected";
                        if (message.twitter != null && message.hasOwnProperty("twitter"))
                            if (!$util.isString(message.twitter))
                                return "twitter: string expected";
                        if (message.phone != null && message.hasOwnProperty("phone"))
                            if (!$util.isString(message.phone))
                                return "phone: string expected";
                        return null;
                    };

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.finos.fo.Contact.Id
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.finos.fo.Contact.Id} Id
                     */
                    Id.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.finos.fo.Contact.Id)
                            return object;
                        var message = new $root.org.finos.fo.Contact.Id();
                        if (object.email != null)
                            message.email = String(object.email);
                        if (object.twitter != null)
                            message.twitter = String(object.twitter);
                        if (object.phone != null)
                            message.phone = String(object.phone);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.finos.fo.Contact.Id
                     * @static
                     * @param {org.finos.fo.Contact.Id} message Id
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Id.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.email = "";
                            object.twitter = "";
                            object.phone = "";
                        }
                        if (message.email != null && message.hasOwnProperty("email"))
                            object.email = message.email;
                        if (message.twitter != null && message.hasOwnProperty("twitter"))
                            object.twitter = message.twitter;
                        if (message.phone != null && message.hasOwnProperty("phone"))
                            object.phone = message.phone;
                        return object;
                    };

                    /**
                     * Converts this Id to JSON.
                     * @function toJSON
                     * @memberof org.finos.fo.Contact.Id
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Id.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Id;
                })();

                return Contact;
            })();

            fo.ContactList = (function() {

                /**
                 * Properties of a ContactList.
                 * @memberof org.finos.fo
                 * @interface IContactList
                 * @property {Array.<org.finos.fo.IContact>|null} [contacts] ContactList contacts
                 */

                /**
                 * Constructs a new ContactList.
                 * @memberof org.finos.fo
                 * @classdesc Represents a ContactList.
                 * @implements IContactList
                 * @constructor
                 * @param {org.finos.fo.IContactList=} [properties] Properties to set
                 */
                function ContactList(properties) {
                    this.contacts = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ContactList contacts.
                 * @member {Array.<org.finos.fo.IContact>} contacts
                 * @memberof org.finos.fo.ContactList
                 * @instance
                 */
                ContactList.prototype.contacts = $util.emptyArray;

                /**
                 * Creates a new ContactList instance using the specified properties.
                 * @function create
                 * @memberof org.finos.fo.ContactList
                 * @static
                 * @param {org.finos.fo.IContactList=} [properties] Properties to set
                 * @returns {org.finos.fo.ContactList} ContactList instance
                 */
                ContactList.create = function create(properties) {
                    return new ContactList(properties);
                };

                /**
                 * Encodes the specified ContactList message. Does not implicitly {@link org.finos.fo.ContactList.verify|verify} messages.
                 * @function encode
                 * @memberof org.finos.fo.ContactList
                 * @static
                 * @param {org.finos.fo.IContactList} message ContactList message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ContactList.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.contacts != null && message.contacts.length)
                        for (var i = 0; i < message.contacts.length; ++i)
                            $root.org.finos.fo.Contact.encode(message.contacts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ContactList message, length delimited. Does not implicitly {@link org.finos.fo.ContactList.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.finos.fo.ContactList
                 * @static
                 * @param {org.finos.fo.IContactList} message ContactList message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ContactList.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ContactList message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.finos.fo.ContactList
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.finos.fo.ContactList} ContactList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ContactList.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.finos.fo.ContactList();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.contacts && message.contacts.length))
                                message.contacts = [];
                            message.contacts.push($root.org.finos.fo.Contact.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ContactList message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.finos.fo.ContactList
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.finos.fo.ContactList} ContactList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ContactList.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ContactList message.
                 * @function verify
                 * @memberof org.finos.fo.ContactList
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ContactList.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.contacts != null && message.hasOwnProperty("contacts")) {
                        if (!Array.isArray(message.contacts))
                            return "contacts: array expected";
                        for (var i = 0; i < message.contacts.length; ++i) {
                            var error = $root.org.finos.fo.Contact.verify(message.contacts[i]);
                            if (error)
                                return "contacts." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ContactList message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.finos.fo.ContactList
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.finos.fo.ContactList} ContactList
                 */
                ContactList.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.finos.fo.ContactList)
                        return object;
                    var message = new $root.org.finos.fo.ContactList();
                    if (object.contacts) {
                        if (!Array.isArray(object.contacts))
                            throw TypeError(".org.finos.fo.ContactList.contacts: array expected");
                        message.contacts = [];
                        for (var i = 0; i < object.contacts.length; ++i) {
                            if (typeof object.contacts[i] !== "object")
                                throw TypeError(".org.finos.fo.ContactList.contacts: object expected");
                            message.contacts[i] = $root.org.finos.fo.Contact.fromObject(object.contacts[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ContactList message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.finos.fo.ContactList
                 * @static
                 * @param {org.finos.fo.ContactList} message ContactList
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ContactList.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.contacts = [];
                    if (message.contacts && message.contacts.length) {
                        object.contacts = [];
                        for (var j = 0; j < message.contacts.length; ++j)
                            object.contacts[j] = $root.org.finos.fo.Contact.toObject(message.contacts[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ContactList to JSON.
                 * @function toJSON
                 * @memberof org.finos.fo.ContactList
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ContactList.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ContactList;
            })();

            fo.Country = (function() {

                /**
                 * Properties of a Country.
                 * @memberof org.finos.fo
                 * @interface ICountry
                 * @property {string|null} [name] Country name
                 */

                /**
                 * Constructs a new Country.
                 * @memberof org.finos.fo
                 * @classdesc Represents a Country.
                 * @implements ICountry
                 * @constructor
                 * @param {org.finos.fo.ICountry=} [properties] Properties to set
                 */
                function Country(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Country name.
                 * @member {string} name
                 * @memberof org.finos.fo.Country
                 * @instance
                 */
                Country.prototype.name = "";

                /**
                 * Creates a new Country instance using the specified properties.
                 * @function create
                 * @memberof org.finos.fo.Country
                 * @static
                 * @param {org.finos.fo.ICountry=} [properties] Properties to set
                 * @returns {org.finos.fo.Country} Country instance
                 */
                Country.create = function create(properties) {
                    return new Country(properties);
                };

                /**
                 * Encodes the specified Country message. Does not implicitly {@link org.finos.fo.Country.verify|verify} messages.
                 * @function encode
                 * @memberof org.finos.fo.Country
                 * @static
                 * @param {org.finos.fo.ICountry} message Country message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Country.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    return writer;
                };

                /**
                 * Encodes the specified Country message, length delimited. Does not implicitly {@link org.finos.fo.Country.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.finos.fo.Country
                 * @static
                 * @param {org.finos.fo.ICountry} message Country message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Country.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Country message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.finos.fo.Country
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.finos.fo.Country} Country
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Country.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.finos.fo.Country();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Country message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.finos.fo.Country
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.finos.fo.Country} Country
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Country.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Country message.
                 * @function verify
                 * @memberof org.finos.fo.Country
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Country.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };

                /**
                 * Creates a Country message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.finos.fo.Country
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.finos.fo.Country} Country
                 */
                Country.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.finos.fo.Country)
                        return object;
                    var message = new $root.org.finos.fo.Country();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };

                /**
                 * Creates a plain object from a Country message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.finos.fo.Country
                 * @static
                 * @param {org.finos.fo.Country} message Country
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Country.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };

                /**
                 * Converts this Country to JSON.
                 * @function toJSON
                 * @memberof org.finos.fo.Country
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Country.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Country.Id = (function() {

                    /**
                     * Properties of an Id.
                     * @memberof org.finos.fo.Country
                     * @interface IId
                     * @property {string|null} [ISOALPHA2] Id ISOALPHA2
                     * @property {string|null} [ISOALPHA3] Id ISOALPHA3
                     */

                    /**
                     * Constructs a new Id.
                     * @memberof org.finos.fo.Country
                     * @classdesc Represents an Id.
                     * @implements IId
                     * @constructor
                     * @param {org.finos.fo.Country.IId=} [properties] Properties to set
                     */
                    function Id(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Id ISOALPHA2.
                     * @member {string} ISOALPHA2
                     * @memberof org.finos.fo.Country.Id
                     * @instance
                     */
                    Id.prototype.ISOALPHA2 = "";

                    /**
                     * Id ISOALPHA3.
                     * @member {string} ISOALPHA3
                     * @memberof org.finos.fo.Country.Id
                     * @instance
                     */
                    Id.prototype.ISOALPHA3 = "";

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @function create
                     * @memberof org.finos.fo.Country.Id
                     * @static
                     * @param {org.finos.fo.Country.IId=} [properties] Properties to set
                     * @returns {org.finos.fo.Country.Id} Id instance
                     */
                    Id.create = function create(properties) {
                        return new Id(properties);
                    };

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link org.finos.fo.Country.Id.verify|verify} messages.
                     * @function encode
                     * @memberof org.finos.fo.Country.Id
                     * @static
                     * @param {org.finos.fo.Country.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ISOALPHA2 != null && message.hasOwnProperty("ISOALPHA2"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ISOALPHA2);
                        if (message.ISOALPHA3 != null && message.hasOwnProperty("ISOALPHA3"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ISOALPHA3);
                        return writer;
                    };

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link org.finos.fo.Country.Id.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof org.finos.fo.Country.Id
                     * @static
                     * @param {org.finos.fo.Country.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.finos.fo.Country.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.finos.fo.Country.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.finos.fo.Country.Id();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.ISOALPHA2 = reader.string();
                                break;
                            case 2:
                                message.ISOALPHA3 = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.finos.fo.Country.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.finos.fo.Country.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Id message.
                     * @function verify
                     * @memberof org.finos.fo.Country.Id
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Id.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ISOALPHA2 != null && message.hasOwnProperty("ISOALPHA2"))
                            if (!$util.isString(message.ISOALPHA2))
                                return "ISOALPHA2: string expected";
                        if (message.ISOALPHA3 != null && message.hasOwnProperty("ISOALPHA3"))
                            if (!$util.isString(message.ISOALPHA3))
                                return "ISOALPHA3: string expected";
                        return null;
                    };

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.finos.fo.Country.Id
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.finos.fo.Country.Id} Id
                     */
                    Id.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.finos.fo.Country.Id)
                            return object;
                        var message = new $root.org.finos.fo.Country.Id();
                        if (object.ISOALPHA2 != null)
                            message.ISOALPHA2 = String(object.ISOALPHA2);
                        if (object.ISOALPHA3 != null)
                            message.ISOALPHA3 = String(object.ISOALPHA3);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.finos.fo.Country.Id
                     * @static
                     * @param {org.finos.fo.Country.Id} message Id
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Id.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.ISOALPHA2 = "";
                            object.ISOALPHA3 = "";
                        }
                        if (message.ISOALPHA2 != null && message.hasOwnProperty("ISOALPHA2"))
                            object.ISOALPHA2 = message.ISOALPHA2;
                        if (message.ISOALPHA3 != null && message.hasOwnProperty("ISOALPHA3"))
                            object.ISOALPHA3 = message.ISOALPHA3;
                        return object;
                    };

                    /**
                     * Converts this Id to JSON.
                     * @function toJSON
                     * @memberof org.finos.fo.Country.Id
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Id.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Id;
                })();

                return Country;
            })();

            fo.Instrument = (function() {

                /**
                 * Properties of an Instrument.
                 * @memberof org.finos.fo
                 * @interface IInstrument
                 * @property {string|null} [name] Instrument name
                 */

                /**
                 * Constructs a new Instrument.
                 * @memberof org.finos.fo
                 * @classdesc Represents an Instrument.
                 * @implements IInstrument
                 * @constructor
                 * @param {org.finos.fo.IInstrument=} [properties] Properties to set
                 */
                function Instrument(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Instrument name.
                 * @member {string} name
                 * @memberof org.finos.fo.Instrument
                 * @instance
                 */
                Instrument.prototype.name = "";

                /**
                 * Creates a new Instrument instance using the specified properties.
                 * @function create
                 * @memberof org.finos.fo.Instrument
                 * @static
                 * @param {org.finos.fo.IInstrument=} [properties] Properties to set
                 * @returns {org.finos.fo.Instrument} Instrument instance
                 */
                Instrument.create = function create(properties) {
                    return new Instrument(properties);
                };

                /**
                 * Encodes the specified Instrument message. Does not implicitly {@link org.finos.fo.Instrument.verify|verify} messages.
                 * @function encode
                 * @memberof org.finos.fo.Instrument
                 * @static
                 * @param {org.finos.fo.IInstrument} message Instrument message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Instrument.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    return writer;
                };

                /**
                 * Encodes the specified Instrument message, length delimited. Does not implicitly {@link org.finos.fo.Instrument.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.finos.fo.Instrument
                 * @static
                 * @param {org.finos.fo.IInstrument} message Instrument message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Instrument.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Instrument message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.finos.fo.Instrument
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.finos.fo.Instrument} Instrument
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Instrument.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.finos.fo.Instrument();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Instrument message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.finos.fo.Instrument
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.finos.fo.Instrument} Instrument
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Instrument.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Instrument message.
                 * @function verify
                 * @memberof org.finos.fo.Instrument
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Instrument.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };

                /**
                 * Creates an Instrument message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.finos.fo.Instrument
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.finos.fo.Instrument} Instrument
                 */
                Instrument.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.finos.fo.Instrument)
                        return object;
                    var message = new $root.org.finos.fo.Instrument();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };

                /**
                 * Creates a plain object from an Instrument message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.finos.fo.Instrument
                 * @static
                 * @param {org.finos.fo.Instrument} message Instrument
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Instrument.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };

                /**
                 * Converts this Instrument to JSON.
                 * @function toJSON
                 * @memberof org.finos.fo.Instrument
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Instrument.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Instrument.Id = (function() {

                    /**
                     * Properties of an Id.
                     * @memberof org.finos.fo.Instrument
                     * @interface IId
                     * @property {string|null} [ticker] Id ticker
                     * @property {string|null} [ISIN] Id ISIN
                     * @property {string|null} [CUSIP] Id CUSIP
                     * @property {string|null} [SEDOL] Id SEDOL
                     * @property {string|null} [RIC] Id RIC
                     * @property {string|null} [BBG] Id BBG
                     * @property {string|null} [PERMID] Id PERMID
                     * @property {string|null} [FIGI] Id FIGI
                     */

                    /**
                     * Constructs a new Id.
                     * @memberof org.finos.fo.Instrument
                     * @classdesc Represents an Id.
                     * @implements IId
                     * @constructor
                     * @param {org.finos.fo.Instrument.IId=} [properties] Properties to set
                     */
                    function Id(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Id ticker.
                     * @member {string} ticker
                     * @memberof org.finos.fo.Instrument.Id
                     * @instance
                     */
                    Id.prototype.ticker = "";

                    /**
                     * Id ISIN.
                     * @member {string} ISIN
                     * @memberof org.finos.fo.Instrument.Id
                     * @instance
                     */
                    Id.prototype.ISIN = "";

                    /**
                     * Id CUSIP.
                     * @member {string} CUSIP
                     * @memberof org.finos.fo.Instrument.Id
                     * @instance
                     */
                    Id.prototype.CUSIP = "";

                    /**
                     * Id SEDOL.
                     * @member {string} SEDOL
                     * @memberof org.finos.fo.Instrument.Id
                     * @instance
                     */
                    Id.prototype.SEDOL = "";

                    /**
                     * Id RIC.
                     * @member {string} RIC
                     * @memberof org.finos.fo.Instrument.Id
                     * @instance
                     */
                    Id.prototype.RIC = "";

                    /**
                     * Id BBG.
                     * @member {string} BBG
                     * @memberof org.finos.fo.Instrument.Id
                     * @instance
                     */
                    Id.prototype.BBG = "";

                    /**
                     * Id PERMID.
                     * @member {string} PERMID
                     * @memberof org.finos.fo.Instrument.Id
                     * @instance
                     */
                    Id.prototype.PERMID = "";

                    /**
                     * Id FIGI.
                     * @member {string} FIGI
                     * @memberof org.finos.fo.Instrument.Id
                     * @instance
                     */
                    Id.prototype.FIGI = "";

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @function create
                     * @memberof org.finos.fo.Instrument.Id
                     * @static
                     * @param {org.finos.fo.Instrument.IId=} [properties] Properties to set
                     * @returns {org.finos.fo.Instrument.Id} Id instance
                     */
                    Id.create = function create(properties) {
                        return new Id(properties);
                    };

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link org.finos.fo.Instrument.Id.verify|verify} messages.
                     * @function encode
                     * @memberof org.finos.fo.Instrument.Id
                     * @static
                     * @param {org.finos.fo.Instrument.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ticker != null && message.hasOwnProperty("ticker"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ticker);
                        if (message.ISIN != null && message.hasOwnProperty("ISIN"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ISIN);
                        if (message.CUSIP != null && message.hasOwnProperty("CUSIP"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.CUSIP);
                        if (message.SEDOL != null && message.hasOwnProperty("SEDOL"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.SEDOL);
                        if (message.RIC != null && message.hasOwnProperty("RIC"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.RIC);
                        if (message.BBG != null && message.hasOwnProperty("BBG"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.BBG);
                        if (message.PERMID != null && message.hasOwnProperty("PERMID"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.PERMID);
                        if (message.FIGI != null && message.hasOwnProperty("FIGI"))
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.FIGI);
                        return writer;
                    };

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link org.finos.fo.Instrument.Id.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof org.finos.fo.Instrument.Id
                     * @static
                     * @param {org.finos.fo.Instrument.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.finos.fo.Instrument.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.finos.fo.Instrument.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.finos.fo.Instrument.Id();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.ticker = reader.string();
                                break;
                            case 2:
                                message.ISIN = reader.string();
                                break;
                            case 3:
                                message.CUSIP = reader.string();
                                break;
                            case 4:
                                message.SEDOL = reader.string();
                                break;
                            case 5:
                                message.RIC = reader.string();
                                break;
                            case 6:
                                message.BBG = reader.string();
                                break;
                            case 7:
                                message.PERMID = reader.string();
                                break;
                            case 8:
                                message.FIGI = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.finos.fo.Instrument.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.finos.fo.Instrument.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Id message.
                     * @function verify
                     * @memberof org.finos.fo.Instrument.Id
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Id.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ticker != null && message.hasOwnProperty("ticker"))
                            if (!$util.isString(message.ticker))
                                return "ticker: string expected";
                        if (message.ISIN != null && message.hasOwnProperty("ISIN"))
                            if (!$util.isString(message.ISIN))
                                return "ISIN: string expected";
                        if (message.CUSIP != null && message.hasOwnProperty("CUSIP"))
                            if (!$util.isString(message.CUSIP))
                                return "CUSIP: string expected";
                        if (message.SEDOL != null && message.hasOwnProperty("SEDOL"))
                            if (!$util.isString(message.SEDOL))
                                return "SEDOL: string expected";
                        if (message.RIC != null && message.hasOwnProperty("RIC"))
                            if (!$util.isString(message.RIC))
                                return "RIC: string expected";
                        if (message.BBG != null && message.hasOwnProperty("BBG"))
                            if (!$util.isString(message.BBG))
                                return "BBG: string expected";
                        if (message.PERMID != null && message.hasOwnProperty("PERMID"))
                            if (!$util.isString(message.PERMID))
                                return "PERMID: string expected";
                        if (message.FIGI != null && message.hasOwnProperty("FIGI"))
                            if (!$util.isString(message.FIGI))
                                return "FIGI: string expected";
                        return null;
                    };

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.finos.fo.Instrument.Id
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.finos.fo.Instrument.Id} Id
                     */
                    Id.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.finos.fo.Instrument.Id)
                            return object;
                        var message = new $root.org.finos.fo.Instrument.Id();
                        if (object.ticker != null)
                            message.ticker = String(object.ticker);
                        if (object.ISIN != null)
                            message.ISIN = String(object.ISIN);
                        if (object.CUSIP != null)
                            message.CUSIP = String(object.CUSIP);
                        if (object.SEDOL != null)
                            message.SEDOL = String(object.SEDOL);
                        if (object.RIC != null)
                            message.RIC = String(object.RIC);
                        if (object.BBG != null)
                            message.BBG = String(object.BBG);
                        if (object.PERMID != null)
                            message.PERMID = String(object.PERMID);
                        if (object.FIGI != null)
                            message.FIGI = String(object.FIGI);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.finos.fo.Instrument.Id
                     * @static
                     * @param {org.finos.fo.Instrument.Id} message Id
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Id.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.ticker = "";
                            object.ISIN = "";
                            object.CUSIP = "";
                            object.SEDOL = "";
                            object.RIC = "";
                            object.BBG = "";
                            object.PERMID = "";
                            object.FIGI = "";
                        }
                        if (message.ticker != null && message.hasOwnProperty("ticker"))
                            object.ticker = message.ticker;
                        if (message.ISIN != null && message.hasOwnProperty("ISIN"))
                            object.ISIN = message.ISIN;
                        if (message.CUSIP != null && message.hasOwnProperty("CUSIP"))
                            object.CUSIP = message.CUSIP;
                        if (message.SEDOL != null && message.hasOwnProperty("SEDOL"))
                            object.SEDOL = message.SEDOL;
                        if (message.RIC != null && message.hasOwnProperty("RIC"))
                            object.RIC = message.RIC;
                        if (message.BBG != null && message.hasOwnProperty("BBG"))
                            object.BBG = message.BBG;
                        if (message.PERMID != null && message.hasOwnProperty("PERMID"))
                            object.PERMID = message.PERMID;
                        if (message.FIGI != null && message.hasOwnProperty("FIGI"))
                            object.FIGI = message.FIGI;
                        return object;
                    };

                    /**
                     * Converts this Id to JSON.
                     * @function toJSON
                     * @memberof org.finos.fo.Instrument.Id
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Id.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Id;
                })();

                return Instrument;
            })();

            fo.InstrumentList = (function() {

                /**
                 * Properties of an InstrumentList.
                 * @memberof org.finos.fo
                 * @interface IInstrumentList
                 * @property {Array.<org.finos.fo.IInstrument>|null} [instruments] InstrumentList instruments
                 */

                /**
                 * Constructs a new InstrumentList.
                 * @memberof org.finos.fo
                 * @classdesc Represents an InstrumentList.
                 * @implements IInstrumentList
                 * @constructor
                 * @param {org.finos.fo.IInstrumentList=} [properties] Properties to set
                 */
                function InstrumentList(properties) {
                    this.instruments = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * InstrumentList instruments.
                 * @member {Array.<org.finos.fo.IInstrument>} instruments
                 * @memberof org.finos.fo.InstrumentList
                 * @instance
                 */
                InstrumentList.prototype.instruments = $util.emptyArray;

                /**
                 * Creates a new InstrumentList instance using the specified properties.
                 * @function create
                 * @memberof org.finos.fo.InstrumentList
                 * @static
                 * @param {org.finos.fo.IInstrumentList=} [properties] Properties to set
                 * @returns {org.finos.fo.InstrumentList} InstrumentList instance
                 */
                InstrumentList.create = function create(properties) {
                    return new InstrumentList(properties);
                };

                /**
                 * Encodes the specified InstrumentList message. Does not implicitly {@link org.finos.fo.InstrumentList.verify|verify} messages.
                 * @function encode
                 * @memberof org.finos.fo.InstrumentList
                 * @static
                 * @param {org.finos.fo.IInstrumentList} message InstrumentList message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                InstrumentList.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.instruments != null && message.instruments.length)
                        for (var i = 0; i < message.instruments.length; ++i)
                            $root.org.finos.fo.Instrument.encode(message.instruments[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified InstrumentList message, length delimited. Does not implicitly {@link org.finos.fo.InstrumentList.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.finos.fo.InstrumentList
                 * @static
                 * @param {org.finos.fo.IInstrumentList} message InstrumentList message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                InstrumentList.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an InstrumentList message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.finos.fo.InstrumentList
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.finos.fo.InstrumentList} InstrumentList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                InstrumentList.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.finos.fo.InstrumentList();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.instruments && message.instruments.length))
                                message.instruments = [];
                            message.instruments.push($root.org.finos.fo.Instrument.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an InstrumentList message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.finos.fo.InstrumentList
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.finos.fo.InstrumentList} InstrumentList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                InstrumentList.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an InstrumentList message.
                 * @function verify
                 * @memberof org.finos.fo.InstrumentList
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                InstrumentList.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.instruments != null && message.hasOwnProperty("instruments")) {
                        if (!Array.isArray(message.instruments))
                            return "instruments: array expected";
                        for (var i = 0; i < message.instruments.length; ++i) {
                            var error = $root.org.finos.fo.Instrument.verify(message.instruments[i]);
                            if (error)
                                return "instruments." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an InstrumentList message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.finos.fo.InstrumentList
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.finos.fo.InstrumentList} InstrumentList
                 */
                InstrumentList.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.finos.fo.InstrumentList)
                        return object;
                    var message = new $root.org.finos.fo.InstrumentList();
                    if (object.instruments) {
                        if (!Array.isArray(object.instruments))
                            throw TypeError(".org.finos.fo.InstrumentList.instruments: array expected");
                        message.instruments = [];
                        for (var i = 0; i < object.instruments.length; ++i) {
                            if (typeof object.instruments[i] !== "object")
                                throw TypeError(".org.finos.fo.InstrumentList.instruments: object expected");
                            message.instruments[i] = $root.org.finos.fo.Instrument.fromObject(object.instruments[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an InstrumentList message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.finos.fo.InstrumentList
                 * @static
                 * @param {org.finos.fo.InstrumentList} message InstrumentList
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                InstrumentList.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.instruments = [];
                    if (message.instruments && message.instruments.length) {
                        object.instruments = [];
                        for (var j = 0; j < message.instruments.length; ++j)
                            object.instruments[j] = $root.org.finos.fo.Instrument.toObject(message.instruments[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this InstrumentList to JSON.
                 * @function toJSON
                 * @memberof org.finos.fo.InstrumentList
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                InstrumentList.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return InstrumentList;
            })();

            fo.Organization = (function() {

                /**
                 * Properties of an Organization.
                 * @memberof org.finos.fo
                 * @interface IOrganization
                 * @property {string|null} [name] Organization name
                 */

                /**
                 * Constructs a new Organization.
                 * @memberof org.finos.fo
                 * @classdesc Represents an Organization.
                 * @implements IOrganization
                 * @constructor
                 * @param {org.finos.fo.IOrganization=} [properties] Properties to set
                 */
                function Organization(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Organization name.
                 * @member {string} name
                 * @memberof org.finos.fo.Organization
                 * @instance
                 */
                Organization.prototype.name = "";

                /**
                 * Creates a new Organization instance using the specified properties.
                 * @function create
                 * @memberof org.finos.fo.Organization
                 * @static
                 * @param {org.finos.fo.IOrganization=} [properties] Properties to set
                 * @returns {org.finos.fo.Organization} Organization instance
                 */
                Organization.create = function create(properties) {
                    return new Organization(properties);
                };

                /**
                 * Encodes the specified Organization message. Does not implicitly {@link org.finos.fo.Organization.verify|verify} messages.
                 * @function encode
                 * @memberof org.finos.fo.Organization
                 * @static
                 * @param {org.finos.fo.IOrganization} message Organization message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Organization.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    return writer;
                };

                /**
                 * Encodes the specified Organization message, length delimited. Does not implicitly {@link org.finos.fo.Organization.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.finos.fo.Organization
                 * @static
                 * @param {org.finos.fo.IOrganization} message Organization message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Organization.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Organization message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.finos.fo.Organization
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.finos.fo.Organization} Organization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Organization.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.finos.fo.Organization();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Organization message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.finos.fo.Organization
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.finos.fo.Organization} Organization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Organization.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Organization message.
                 * @function verify
                 * @memberof org.finos.fo.Organization
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Organization.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };

                /**
                 * Creates an Organization message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.finos.fo.Organization
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.finos.fo.Organization} Organization
                 */
                Organization.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.finos.fo.Organization)
                        return object;
                    var message = new $root.org.finos.fo.Organization();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };

                /**
                 * Creates a plain object from an Organization message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.finos.fo.Organization
                 * @static
                 * @param {org.finos.fo.Organization} message Organization
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Organization.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };

                /**
                 * Converts this Organization to JSON.
                 * @function toJSON
                 * @memberof org.finos.fo.Organization
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Organization.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Organization.Id = (function() {

                    /**
                     * Properties of an Id.
                     * @memberof org.finos.fo.Organization
                     * @interface IId
                     * @property {string|null} [LEI] Id LEI
                     * @property {string|null} [PERMID] Id PERMID
                     */

                    /**
                     * Constructs a new Id.
                     * @memberof org.finos.fo.Organization
                     * @classdesc Represents an Id.
                     * @implements IId
                     * @constructor
                     * @param {org.finos.fo.Organization.IId=} [properties] Properties to set
                     */
                    function Id(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Id LEI.
                     * @member {string} LEI
                     * @memberof org.finos.fo.Organization.Id
                     * @instance
                     */
                    Id.prototype.LEI = "";

                    /**
                     * Id PERMID.
                     * @member {string} PERMID
                     * @memberof org.finos.fo.Organization.Id
                     * @instance
                     */
                    Id.prototype.PERMID = "";

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @function create
                     * @memberof org.finos.fo.Organization.Id
                     * @static
                     * @param {org.finos.fo.Organization.IId=} [properties] Properties to set
                     * @returns {org.finos.fo.Organization.Id} Id instance
                     */
                    Id.create = function create(properties) {
                        return new Id(properties);
                    };

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link org.finos.fo.Organization.Id.verify|verify} messages.
                     * @function encode
                     * @memberof org.finos.fo.Organization.Id
                     * @static
                     * @param {org.finos.fo.Organization.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.LEI != null && message.hasOwnProperty("LEI"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.LEI);
                        if (message.PERMID != null && message.hasOwnProperty("PERMID"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.PERMID);
                        return writer;
                    };

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link org.finos.fo.Organization.Id.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof org.finos.fo.Organization.Id
                     * @static
                     * @param {org.finos.fo.Organization.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.finos.fo.Organization.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.finos.fo.Organization.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.finos.fo.Organization.Id();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.LEI = reader.string();
                                break;
                            case 2:
                                message.PERMID = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.finos.fo.Organization.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.finos.fo.Organization.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Id message.
                     * @function verify
                     * @memberof org.finos.fo.Organization.Id
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Id.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.LEI != null && message.hasOwnProperty("LEI"))
                            if (!$util.isString(message.LEI))
                                return "LEI: string expected";
                        if (message.PERMID != null && message.hasOwnProperty("PERMID"))
                            if (!$util.isString(message.PERMID))
                                return "PERMID: string expected";
                        return null;
                    };

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.finos.fo.Organization.Id
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.finos.fo.Organization.Id} Id
                     */
                    Id.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.finos.fo.Organization.Id)
                            return object;
                        var message = new $root.org.finos.fo.Organization.Id();
                        if (object.LEI != null)
                            message.LEI = String(object.LEI);
                        if (object.PERMID != null)
                            message.PERMID = String(object.PERMID);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.finos.fo.Organization.Id
                     * @static
                     * @param {org.finos.fo.Organization.Id} message Id
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Id.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.LEI = "";
                            object.PERMID = "";
                        }
                        if (message.LEI != null && message.hasOwnProperty("LEI"))
                            object.LEI = message.LEI;
                        if (message.PERMID != null && message.hasOwnProperty("PERMID"))
                            object.PERMID = message.PERMID;
                        return object;
                    };

                    /**
                     * Converts this Id to JSON.
                     * @function toJSON
                     * @memberof org.finos.fo.Organization.Id
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Id.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Id;
                })();

                return Organization;
            })();

            fo.Position = (function() {

                /**
                 * Properties of a Position.
                 * @memberof org.finos.fo
                 * @interface IPosition
                 * @property {org.finos.fo.IInstrument|null} [instrument] Position instrument
                 * @property {number|Long|null} [holding] Position holding
                 */

                /**
                 * Constructs a new Position.
                 * @memberof org.finos.fo
                 * @classdesc Represents a Position.
                 * @implements IPosition
                 * @constructor
                 * @param {org.finos.fo.IPosition=} [properties] Properties to set
                 */
                function Position(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Position instrument.
                 * @member {org.finos.fo.IInstrument|null|undefined} instrument
                 * @memberof org.finos.fo.Position
                 * @instance
                 */
                Position.prototype.instrument = null;

                /**
                 * Position holding.
                 * @member {number|Long} holding
                 * @memberof org.finos.fo.Position
                 * @instance
                 */
                Position.prototype.holding = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new Position instance using the specified properties.
                 * @function create
                 * @memberof org.finos.fo.Position
                 * @static
                 * @param {org.finos.fo.IPosition=} [properties] Properties to set
                 * @returns {org.finos.fo.Position} Position instance
                 */
                Position.create = function create(properties) {
                    return new Position(properties);
                };

                /**
                 * Encodes the specified Position message. Does not implicitly {@link org.finos.fo.Position.verify|verify} messages.
                 * @function encode
                 * @memberof org.finos.fo.Position
                 * @static
                 * @param {org.finos.fo.IPosition} message Position message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Position.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        $root.org.finos.fo.Instrument.encode(message.instrument, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.holding != null && message.hasOwnProperty("holding"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.holding);
                    return writer;
                };

                /**
                 * Encodes the specified Position message, length delimited. Does not implicitly {@link org.finos.fo.Position.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.finos.fo.Position
                 * @static
                 * @param {org.finos.fo.IPosition} message Position message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Position.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Position message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.finos.fo.Position
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.finos.fo.Position} Position
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Position.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.finos.fo.Position();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.instrument = $root.org.finos.fo.Instrument.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.holding = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Position message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.finos.fo.Position
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.finos.fo.Position} Position
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Position.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Position message.
                 * @function verify
                 * @memberof org.finos.fo.Position
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Position.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.instrument != null && message.hasOwnProperty("instrument")) {
                        var error = $root.org.finos.fo.Instrument.verify(message.instrument);
                        if (error)
                            return "instrument." + error;
                    }
                    if (message.holding != null && message.hasOwnProperty("holding"))
                        if (!$util.isInteger(message.holding) && !(message.holding && $util.isInteger(message.holding.low) && $util.isInteger(message.holding.high)))
                            return "holding: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a Position message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.finos.fo.Position
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.finos.fo.Position} Position
                 */
                Position.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.finos.fo.Position)
                        return object;
                    var message = new $root.org.finos.fo.Position();
                    if (object.instrument != null) {
                        if (typeof object.instrument !== "object")
                            throw TypeError(".org.finos.fo.Position.instrument: object expected");
                        message.instrument = $root.org.finos.fo.Instrument.fromObject(object.instrument);
                    }
                    if (object.holding != null)
                        if ($util.Long)
                            (message.holding = $util.Long.fromValue(object.holding)).unsigned = false;
                        else if (typeof object.holding === "string")
                            message.holding = parseInt(object.holding, 10);
                        else if (typeof object.holding === "number")
                            message.holding = object.holding;
                        else if (typeof object.holding === "object")
                            message.holding = new $util.LongBits(object.holding.low >>> 0, object.holding.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a Position message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.finos.fo.Position
                 * @static
                 * @param {org.finos.fo.Position} message Position
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Position.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.instrument = null;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.holding = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.holding = options.longs === String ? "0" : 0;
                    }
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        object.instrument = $root.org.finos.fo.Instrument.toObject(message.instrument, options);
                    if (message.holding != null && message.hasOwnProperty("holding"))
                        if (typeof message.holding === "number")
                            object.holding = options.longs === String ? String(message.holding) : message.holding;
                        else
                            object.holding = options.longs === String ? $util.Long.prototype.toString.call(message.holding) : options.longs === Number ? new $util.LongBits(message.holding.low >>> 0, message.holding.high >>> 0).toNumber() : message.holding;
                    return object;
                };

                /**
                 * Converts this Position to JSON.
                 * @function toJSON
                 * @memberof org.finos.fo.Position
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Position.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Position;
            })();

            fo.Portfolio = (function() {

                /**
                 * Properties of a Portfolio.
                 * @memberof org.finos.fo
                 * @interface IPortfolio
                 * @property {string|null} [name] Portfolio name
                 * @property {Array.<org.finos.fo.IPosition>|null} [positions] Portfolio positions
                 */

                /**
                 * Constructs a new Portfolio.
                 * @memberof org.finos.fo
                 * @classdesc Represents a Portfolio.
                 * @implements IPortfolio
                 * @constructor
                 * @param {org.finos.fo.IPortfolio=} [properties] Properties to set
                 */
                function Portfolio(properties) {
                    this.positions = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Portfolio name.
                 * @member {string} name
                 * @memberof org.finos.fo.Portfolio
                 * @instance
                 */
                Portfolio.prototype.name = "";

                /**
                 * Portfolio positions.
                 * @member {Array.<org.finos.fo.IPosition>} positions
                 * @memberof org.finos.fo.Portfolio
                 * @instance
                 */
                Portfolio.prototype.positions = $util.emptyArray;

                /**
                 * Creates a new Portfolio instance using the specified properties.
                 * @function create
                 * @memberof org.finos.fo.Portfolio
                 * @static
                 * @param {org.finos.fo.IPortfolio=} [properties] Properties to set
                 * @returns {org.finos.fo.Portfolio} Portfolio instance
                 */
                Portfolio.create = function create(properties) {
                    return new Portfolio(properties);
                };

                /**
                 * Encodes the specified Portfolio message. Does not implicitly {@link org.finos.fo.Portfolio.verify|verify} messages.
                 * @function encode
                 * @memberof org.finos.fo.Portfolio
                 * @static
                 * @param {org.finos.fo.IPortfolio} message Portfolio message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Portfolio.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.positions != null && message.positions.length)
                        for (var i = 0; i < message.positions.length; ++i)
                            $root.org.finos.fo.Position.encode(message.positions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Portfolio message, length delimited. Does not implicitly {@link org.finos.fo.Portfolio.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.finos.fo.Portfolio
                 * @static
                 * @param {org.finos.fo.IPortfolio} message Portfolio message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Portfolio.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Portfolio message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.finos.fo.Portfolio
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.finos.fo.Portfolio} Portfolio
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Portfolio.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.finos.fo.Portfolio();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.positions && message.positions.length))
                                message.positions = [];
                            message.positions.push($root.org.finos.fo.Position.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Portfolio message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.finos.fo.Portfolio
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.finos.fo.Portfolio} Portfolio
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Portfolio.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Portfolio message.
                 * @function verify
                 * @memberof org.finos.fo.Portfolio
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Portfolio.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.positions != null && message.hasOwnProperty("positions")) {
                        if (!Array.isArray(message.positions))
                            return "positions: array expected";
                        for (var i = 0; i < message.positions.length; ++i) {
                            var error = $root.org.finos.fo.Position.verify(message.positions[i]);
                            if (error)
                                return "positions." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Portfolio message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.finos.fo.Portfolio
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.finos.fo.Portfolio} Portfolio
                 */
                Portfolio.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.finos.fo.Portfolio)
                        return object;
                    var message = new $root.org.finos.fo.Portfolio();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.positions) {
                        if (!Array.isArray(object.positions))
                            throw TypeError(".org.finos.fo.Portfolio.positions: array expected");
                        message.positions = [];
                        for (var i = 0; i < object.positions.length; ++i) {
                            if (typeof object.positions[i] !== "object")
                                throw TypeError(".org.finos.fo.Portfolio.positions: object expected");
                            message.positions[i] = $root.org.finos.fo.Position.fromObject(object.positions[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Portfolio message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.finos.fo.Portfolio
                 * @static
                 * @param {org.finos.fo.Portfolio} message Portfolio
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Portfolio.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.positions = [];
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.positions && message.positions.length) {
                        object.positions = [];
                        for (var j = 0; j < message.positions.length; ++j)
                            object.positions[j] = $root.org.finos.fo.Position.toObject(message.positions[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Portfolio to JSON.
                 * @function toJSON
                 * @memberof org.finos.fo.Portfolio
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Portfolio.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Portfolio.Id = (function() {

                    /**
                     * Properties of an Id.
                     * @memberof org.finos.fo.Portfolio
                     * @interface IId
                     * @property {string|null} [portfolioId] Id portfolioId
                     */

                    /**
                     * Constructs a new Id.
                     * @memberof org.finos.fo.Portfolio
                     * @classdesc Represents an Id.
                     * @implements IId
                     * @constructor
                     * @param {org.finos.fo.Portfolio.IId=} [properties] Properties to set
                     */
                    function Id(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Id portfolioId.
                     * @member {string} portfolioId
                     * @memberof org.finos.fo.Portfolio.Id
                     * @instance
                     */
                    Id.prototype.portfolioId = "";

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @function create
                     * @memberof org.finos.fo.Portfolio.Id
                     * @static
                     * @param {org.finos.fo.Portfolio.IId=} [properties] Properties to set
                     * @returns {org.finos.fo.Portfolio.Id} Id instance
                     */
                    Id.create = function create(properties) {
                        return new Id(properties);
                    };

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link org.finos.fo.Portfolio.Id.verify|verify} messages.
                     * @function encode
                     * @memberof org.finos.fo.Portfolio.Id
                     * @static
                     * @param {org.finos.fo.Portfolio.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.portfolioId != null && message.hasOwnProperty("portfolioId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.portfolioId);
                        return writer;
                    };

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link org.finos.fo.Portfolio.Id.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof org.finos.fo.Portfolio.Id
                     * @static
                     * @param {org.finos.fo.Portfolio.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.finos.fo.Portfolio.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.finos.fo.Portfolio.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.finos.fo.Portfolio.Id();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.portfolioId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.finos.fo.Portfolio.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.finos.fo.Portfolio.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Id message.
                     * @function verify
                     * @memberof org.finos.fo.Portfolio.Id
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Id.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.portfolioId != null && message.hasOwnProperty("portfolioId"))
                            if (!$util.isString(message.portfolioId))
                                return "portfolioId: string expected";
                        return null;
                    };

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.finos.fo.Portfolio.Id
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.finos.fo.Portfolio.Id} Id
                     */
                    Id.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.finos.fo.Portfolio.Id)
                            return object;
                        var message = new $root.org.finos.fo.Portfolio.Id();
                        if (object.portfolioId != null)
                            message.portfolioId = String(object.portfolioId);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.finos.fo.Portfolio.Id
                     * @static
                     * @param {org.finos.fo.Portfolio.Id} message Id
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Id.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.portfolioId = "";
                        if (message.portfolioId != null && message.hasOwnProperty("portfolioId"))
                            object.portfolioId = message.portfolioId;
                        return object;
                    };

                    /**
                     * Converts this Id to JSON.
                     * @function toJSON
                     * @memberof org.finos.fo.Portfolio.Id
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Id.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Id;
                })();

                return Portfolio;
            })();

            return fo;
        })();

        return finos;
    })();

    return org;
})();

module.exports = $root;
