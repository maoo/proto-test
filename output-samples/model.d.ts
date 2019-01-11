import * as $protobuf from "protobufjs";
/** Namespace org. */
export namespace org {

    /** Namespace finos. */
    namespace finos {

        /** Namespace fo. */
        namespace fo {

            /** Properties of a Contact. */
            interface IContact {
            }

            /** Represents a Contact. */
            class Contact implements IContact {

                /**
                 * Constructs a new Contact.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.finos.fo.IContact);

                /**
                 * Creates a new Contact instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Contact instance
                 */
                public static create(properties?: org.finos.fo.IContact): org.finos.fo.Contact;

                /**
                 * Encodes the specified Contact message. Does not implicitly {@link org.finos.fo.Contact.verify|verify} messages.
                 * @param message Contact message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.finos.fo.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Contact message, length delimited. Does not implicitly {@link org.finos.fo.Contact.verify|verify} messages.
                 * @param message Contact message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.finos.fo.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Contact message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Contact
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.finos.fo.Contact;

                /**
                 * Decodes a Contact message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Contact
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.finos.fo.Contact;

                /**
                 * Verifies a Contact message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Contact message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Contact
                 */
                public static fromObject(object: { [k: string]: any }): org.finos.fo.Contact;

                /**
                 * Creates a plain object from a Contact message. Also converts values to other types if specified.
                 * @param message Contact
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.finos.fo.Contact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Contact to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Contact {

                /** Properties of an Id. */
                interface IId {

                    /** Id email */
                    email?: (string|null);

                    /** Id twitter */
                    twitter?: (string|null);

                    /** Id phone */
                    phone?: (string|null);
                }

                /** Represents an Id. */
                class Id implements IId {

                    /**
                     * Constructs a new Id.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.finos.fo.Contact.IId);

                    /** Id email. */
                    public email: string;

                    /** Id twitter. */
                    public twitter: string;

                    /** Id phone. */
                    public phone: string;

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Id instance
                     */
                    public static create(properties?: org.finos.fo.Contact.IId): org.finos.fo.Contact.Id;

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link org.finos.fo.Contact.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: org.finos.fo.Contact.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link org.finos.fo.Contact.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: org.finos.fo.Contact.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.finos.fo.Contact.Id;

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.finos.fo.Contact.Id;

                    /**
                     * Verifies an Id message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Id
                     */
                    public static fromObject(object: { [k: string]: any }): org.finos.fo.Contact.Id;

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @param message Id
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.finos.fo.Contact.Id, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Id to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a ContactList. */
            interface IContactList {

                /** ContactList contacts */
                contacts?: (org.finos.fo.IContact[]|null);
            }

            /** Represents a ContactList. */
            class ContactList implements IContactList {

                /**
                 * Constructs a new ContactList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.finos.fo.IContactList);

                /** ContactList contacts. */
                public contacts: org.finos.fo.IContact[];

                /**
                 * Creates a new ContactList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContactList instance
                 */
                public static create(properties?: org.finos.fo.IContactList): org.finos.fo.ContactList;

                /**
                 * Encodes the specified ContactList message. Does not implicitly {@link org.finos.fo.ContactList.verify|verify} messages.
                 * @param message ContactList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.finos.fo.IContactList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContactList message, length delimited. Does not implicitly {@link org.finos.fo.ContactList.verify|verify} messages.
                 * @param message ContactList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.finos.fo.IContactList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContactList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContactList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.finos.fo.ContactList;

                /**
                 * Decodes a ContactList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContactList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.finos.fo.ContactList;

                /**
                 * Verifies a ContactList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContactList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContactList
                 */
                public static fromObject(object: { [k: string]: any }): org.finos.fo.ContactList;

                /**
                 * Creates a plain object from a ContactList message. Also converts values to other types if specified.
                 * @param message ContactList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.finos.fo.ContactList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContactList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Country. */
            interface ICountry {

                /** Country name */
                name?: (string|null);
            }

            /** Represents a Country. */
            class Country implements ICountry {

                /**
                 * Constructs a new Country.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.finos.fo.ICountry);

                /** Country name. */
                public name: string;

                /**
                 * Creates a new Country instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Country instance
                 */
                public static create(properties?: org.finos.fo.ICountry): org.finos.fo.Country;

                /**
                 * Encodes the specified Country message. Does not implicitly {@link org.finos.fo.Country.verify|verify} messages.
                 * @param message Country message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.finos.fo.ICountry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Country message, length delimited. Does not implicitly {@link org.finos.fo.Country.verify|verify} messages.
                 * @param message Country message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.finos.fo.ICountry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Country message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Country
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.finos.fo.Country;

                /**
                 * Decodes a Country message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Country
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.finos.fo.Country;

                /**
                 * Verifies a Country message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Country message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Country
                 */
                public static fromObject(object: { [k: string]: any }): org.finos.fo.Country;

                /**
                 * Creates a plain object from a Country message. Also converts values to other types if specified.
                 * @param message Country
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.finos.fo.Country, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Country to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Country {

                /** Properties of an Id. */
                interface IId {

                    /** Id ISOALPHA2 */
                    ISOALPHA2?: (string|null);

                    /** Id ISOALPHA3 */
                    ISOALPHA3?: (string|null);
                }

                /** Represents an Id. */
                class Id implements IId {

                    /**
                     * Constructs a new Id.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.finos.fo.Country.IId);

                    /** Id ISOALPHA2. */
                    public ISOALPHA2: string;

                    /** Id ISOALPHA3. */
                    public ISOALPHA3: string;

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Id instance
                     */
                    public static create(properties?: org.finos.fo.Country.IId): org.finos.fo.Country.Id;

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link org.finos.fo.Country.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: org.finos.fo.Country.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link org.finos.fo.Country.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: org.finos.fo.Country.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.finos.fo.Country.Id;

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.finos.fo.Country.Id;

                    /**
                     * Verifies an Id message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Id
                     */
                    public static fromObject(object: { [k: string]: any }): org.finos.fo.Country.Id;

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @param message Id
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.finos.fo.Country.Id, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Id to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of an Instrument. */
            interface IInstrument {

                /** Instrument name */
                name?: (string|null);
            }

            /** Represents an Instrument. */
            class Instrument implements IInstrument {

                /**
                 * Constructs a new Instrument.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.finos.fo.IInstrument);

                /** Instrument name. */
                public name: string;

                /**
                 * Creates a new Instrument instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Instrument instance
                 */
                public static create(properties?: org.finos.fo.IInstrument): org.finos.fo.Instrument;

                /**
                 * Encodes the specified Instrument message. Does not implicitly {@link org.finos.fo.Instrument.verify|verify} messages.
                 * @param message Instrument message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.finos.fo.IInstrument, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Instrument message, length delimited. Does not implicitly {@link org.finos.fo.Instrument.verify|verify} messages.
                 * @param message Instrument message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.finos.fo.IInstrument, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Instrument message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Instrument
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.finos.fo.Instrument;

                /**
                 * Decodes an Instrument message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Instrument
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.finos.fo.Instrument;

                /**
                 * Verifies an Instrument message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Instrument message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Instrument
                 */
                public static fromObject(object: { [k: string]: any }): org.finos.fo.Instrument;

                /**
                 * Creates a plain object from an Instrument message. Also converts values to other types if specified.
                 * @param message Instrument
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.finos.fo.Instrument, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Instrument to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Instrument {

                /** Properties of an Id. */
                interface IId {

                    /** Id ticker */
                    ticker?: (string|null);

                    /** Id ISIN */
                    ISIN?: (string|null);

                    /** Id CUSIP */
                    CUSIP?: (string|null);

                    /** Id SEDOL */
                    SEDOL?: (string|null);

                    /** Id RIC */
                    RIC?: (string|null);

                    /** Id BBG */
                    BBG?: (string|null);

                    /** Id PERMID */
                    PERMID?: (string|null);

                    /** Id FIGI */
                    FIGI?: (string|null);
                }

                /** Represents an Id. */
                class Id implements IId {

                    /**
                     * Constructs a new Id.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.finos.fo.Instrument.IId);

                    /** Id ticker. */
                    public ticker: string;

                    /** Id ISIN. */
                    public ISIN: string;

                    /** Id CUSIP. */
                    public CUSIP: string;

                    /** Id SEDOL. */
                    public SEDOL: string;

                    /** Id RIC. */
                    public RIC: string;

                    /** Id BBG. */
                    public BBG: string;

                    /** Id PERMID. */
                    public PERMID: string;

                    /** Id FIGI. */
                    public FIGI: string;

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Id instance
                     */
                    public static create(properties?: org.finos.fo.Instrument.IId): org.finos.fo.Instrument.Id;

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link org.finos.fo.Instrument.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: org.finos.fo.Instrument.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link org.finos.fo.Instrument.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: org.finos.fo.Instrument.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.finos.fo.Instrument.Id;

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.finos.fo.Instrument.Id;

                    /**
                     * Verifies an Id message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Id
                     */
                    public static fromObject(object: { [k: string]: any }): org.finos.fo.Instrument.Id;

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @param message Id
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.finos.fo.Instrument.Id, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Id to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of an InstrumentList. */
            interface IInstrumentList {

                /** InstrumentList instruments */
                instruments?: (org.finos.fo.IInstrument[]|null);
            }

            /** Represents an InstrumentList. */
            class InstrumentList implements IInstrumentList {

                /**
                 * Constructs a new InstrumentList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.finos.fo.IInstrumentList);

                /** InstrumentList instruments. */
                public instruments: org.finos.fo.IInstrument[];

                /**
                 * Creates a new InstrumentList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InstrumentList instance
                 */
                public static create(properties?: org.finos.fo.IInstrumentList): org.finos.fo.InstrumentList;

                /**
                 * Encodes the specified InstrumentList message. Does not implicitly {@link org.finos.fo.InstrumentList.verify|verify} messages.
                 * @param message InstrumentList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.finos.fo.IInstrumentList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InstrumentList message, length delimited. Does not implicitly {@link org.finos.fo.InstrumentList.verify|verify} messages.
                 * @param message InstrumentList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.finos.fo.IInstrumentList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InstrumentList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InstrumentList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.finos.fo.InstrumentList;

                /**
                 * Decodes an InstrumentList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InstrumentList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.finos.fo.InstrumentList;

                /**
                 * Verifies an InstrumentList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InstrumentList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InstrumentList
                 */
                public static fromObject(object: { [k: string]: any }): org.finos.fo.InstrumentList;

                /**
                 * Creates a plain object from an InstrumentList message. Also converts values to other types if specified.
                 * @param message InstrumentList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.finos.fo.InstrumentList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InstrumentList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Organization. */
            interface IOrganization {

                /** Organization name */
                name?: (string|null);
            }

            /** Represents an Organization. */
            class Organization implements IOrganization {

                /**
                 * Constructs a new Organization.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.finos.fo.IOrganization);

                /** Organization name. */
                public name: string;

                /**
                 * Creates a new Organization instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Organization instance
                 */
                public static create(properties?: org.finos.fo.IOrganization): org.finos.fo.Organization;

                /**
                 * Encodes the specified Organization message. Does not implicitly {@link org.finos.fo.Organization.verify|verify} messages.
                 * @param message Organization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.finos.fo.IOrganization, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Organization message, length delimited. Does not implicitly {@link org.finos.fo.Organization.verify|verify} messages.
                 * @param message Organization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.finos.fo.IOrganization, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Organization message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Organization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.finos.fo.Organization;

                /**
                 * Decodes an Organization message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Organization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.finos.fo.Organization;

                /**
                 * Verifies an Organization message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Organization message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Organization
                 */
                public static fromObject(object: { [k: string]: any }): org.finos.fo.Organization;

                /**
                 * Creates a plain object from an Organization message. Also converts values to other types if specified.
                 * @param message Organization
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.finos.fo.Organization, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Organization to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Organization {

                /** Properties of an Id. */
                interface IId {

                    /** Id LEI */
                    LEI?: (string|null);

                    /** Id PERMID */
                    PERMID?: (string|null);
                }

                /** Represents an Id. */
                class Id implements IId {

                    /**
                     * Constructs a new Id.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.finos.fo.Organization.IId);

                    /** Id LEI. */
                    public LEI: string;

                    /** Id PERMID. */
                    public PERMID: string;

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Id instance
                     */
                    public static create(properties?: org.finos.fo.Organization.IId): org.finos.fo.Organization.Id;

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link org.finos.fo.Organization.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: org.finos.fo.Organization.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link org.finos.fo.Organization.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: org.finos.fo.Organization.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.finos.fo.Organization.Id;

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.finos.fo.Organization.Id;

                    /**
                     * Verifies an Id message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Id
                     */
                    public static fromObject(object: { [k: string]: any }): org.finos.fo.Organization.Id;

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @param message Id
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.finos.fo.Organization.Id, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Id to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Position. */
            interface IPosition {

                /** Position instrument */
                instrument?: (org.finos.fo.IInstrument|null);

                /** Position holding */
                holding?: (number|Long|null);
            }

            /** Represents a Position. */
            class Position implements IPosition {

                /**
                 * Constructs a new Position.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.finos.fo.IPosition);

                /** Position instrument. */
                public instrument?: (org.finos.fo.IInstrument|null);

                /** Position holding. */
                public holding: (number|Long);

                /**
                 * Creates a new Position instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Position instance
                 */
                public static create(properties?: org.finos.fo.IPosition): org.finos.fo.Position;

                /**
                 * Encodes the specified Position message. Does not implicitly {@link org.finos.fo.Position.verify|verify} messages.
                 * @param message Position message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.finos.fo.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Position message, length delimited. Does not implicitly {@link org.finos.fo.Position.verify|verify} messages.
                 * @param message Position message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.finos.fo.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Position message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Position
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.finos.fo.Position;

                /**
                 * Decodes a Position message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Position
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.finos.fo.Position;

                /**
                 * Verifies a Position message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Position message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Position
                 */
                public static fromObject(object: { [k: string]: any }): org.finos.fo.Position;

                /**
                 * Creates a plain object from a Position message. Also converts values to other types if specified.
                 * @param message Position
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.finos.fo.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Position to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Portfolio. */
            interface IPortfolio {

                /** Portfolio name */
                name?: (string|null);

                /** Portfolio positions */
                positions?: (org.finos.fo.IPosition[]|null);
            }

            /** Represents a Portfolio. */
            class Portfolio implements IPortfolio {

                /**
                 * Constructs a new Portfolio.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.finos.fo.IPortfolio);

                /** Portfolio name. */
                public name: string;

                /** Portfolio positions. */
                public positions: org.finos.fo.IPosition[];

                /**
                 * Creates a new Portfolio instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Portfolio instance
                 */
                public static create(properties?: org.finos.fo.IPortfolio): org.finos.fo.Portfolio;

                /**
                 * Encodes the specified Portfolio message. Does not implicitly {@link org.finos.fo.Portfolio.verify|verify} messages.
                 * @param message Portfolio message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.finos.fo.IPortfolio, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Portfolio message, length delimited. Does not implicitly {@link org.finos.fo.Portfolio.verify|verify} messages.
                 * @param message Portfolio message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.finos.fo.IPortfolio, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Portfolio message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Portfolio
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.finos.fo.Portfolio;

                /**
                 * Decodes a Portfolio message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Portfolio
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.finos.fo.Portfolio;

                /**
                 * Verifies a Portfolio message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Portfolio message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Portfolio
                 */
                public static fromObject(object: { [k: string]: any }): org.finos.fo.Portfolio;

                /**
                 * Creates a plain object from a Portfolio message. Also converts values to other types if specified.
                 * @param message Portfolio
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.finos.fo.Portfolio, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Portfolio to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Portfolio {

                /** Properties of an Id. */
                interface IId {

                    /** Id portfolioId */
                    portfolioId?: (string|null);
                }

                /** Represents an Id. */
                class Id implements IId {

                    /**
                     * Constructs a new Id.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.finos.fo.Portfolio.IId);

                    /** Id portfolioId. */
                    public portfolioId: string;

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Id instance
                     */
                    public static create(properties?: org.finos.fo.Portfolio.IId): org.finos.fo.Portfolio.Id;

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link org.finos.fo.Portfolio.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: org.finos.fo.Portfolio.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link org.finos.fo.Portfolio.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: org.finos.fo.Portfolio.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.finos.fo.Portfolio.Id;

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.finos.fo.Portfolio.Id;

                    /**
                     * Verifies an Id message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Id
                     */
                    public static fromObject(object: { [k: string]: any }): org.finos.fo.Portfolio.Id;

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @param message Id
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.finos.fo.Portfolio.Id, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Id to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}
