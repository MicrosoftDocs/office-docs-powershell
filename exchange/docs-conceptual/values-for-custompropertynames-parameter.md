---
title: Values for the CustomPropertyNames parameter
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-online
ms.reviewer:
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn about the valid values for the CustomPropertyNames parameter on the the Get-CalendarDiagnosticsLog cmdlet in Exchange Online PowerShell."
---

# Values for the CustomPropertyNames parameter in Exchange Online PowerShell

The _CustomPropertyNames_ parameter on the [Get-CalendarDiagnosticObjects](/powershell/module/exchange/get-calendardiagnosticobjects) cmdlet returns the specified properties in the results.

The article describes the valid values for the _CustomPropertyNames_ parameter.

|CustomPropertyNames|Description|
|---|---|
|AddOnlineMeetingOnFinalize|Add online meeting on finalize flag.|
|AllAttachmentsHidden|The AllAttachmentsHidden property displays whether or not there are non-inline attachments inside the protected message.|
|AppointmentAuxiliaryFlags|Detect whether the meeting request is a forwarded meeting (for example, IsForwardedMeeting or AttendeeCount).|
|AppointmentClass|AppointmentClass is the MessageClass of the calendar item from which a meeting message is created.|
|AppointmentCounterEndWhole|End time proposal.|
|AppointmentCounterProposalCount|Current counter proposal count.|
|AppointmentCounterProposal|Indicates whether a Meeting Response object is a counter proposal.|
|AppointmentCounterStartWhole|Start time proposal.|
|AppointmentLastSequenceNumber|If AppointmentSequenceNumber doesn't match, then use AppointmentLastSequenceNumber to decide if this stale incoming request.|
|AppointmentProposedDuration|Proposed duration of the meeting in total minutes.|
|AppointmentRecurrenceBlob|Holds a copy of recurring information only from Recurring Masters.|
|AppointmentRecurring|Shows Bool True or False whether an Appointment is recurring.|
|AppointmentReplyName|The calendar item appointment reply name.|
|AppointmentReplyTime|Gets the time when the attendee replied to the meeting request.|
|AppointmentSequenceNumber|Gets the sequence number of this appointment.|
|AppointmentSequenceTime|Every appointment has a sequence number that is incremented on every modification.|
|AppointmentStateInternal|Gets the state of this appointment (for example, Meeting or Received).|
|AppointmentState|Gets the state of this appointment (for example, Meeting or Received).|
|AttendeeCriticalChangeTime|The attendee's critical change time.|
|BirthdayContactAttributionDisplayName|Property used to indicate the name of the contact associated with the birthday event.|
|BirthdayContactId|Represents the birthday contact ID property.|
|BirthdayPersonId|Represents the birthday person ID property used to associate multiple contact object to a single, aggregate person.|
|Birthday|Birthday of the contact.|
|CalendarItemExperienceTypeInternal|Experience type for a calendar item, used by client to render custom user experiences for different types of calendar items.|
|CalendarItemType|The Calendar Item Type (for example, RecurringMaster).|
|CalendarLogTriggerAction|The action thats taken on the item (for example, Create or Update).|
|CalendarOriginatorId|Identification of the organizer to prevent unintentional takeover of a meeting by other users.|
|CalendarProcessed|Check if the meeting message has been processed by XSO.|
|CalendarProcessingSteps|This is a set of flags for the various steps we completed in the stages of processing.|
|ChangeHighlight|Encapsulates information on the change highlights of a meeting request.|
|ChangeList|Add item to change list.|
|Charm|Charm on a calendar folder or item.|
|CleanGlobalObjectId|CleanGlobalObjectID is just the GlobalObjectId with the Instance Date segment zeroed out.  This property will be the same for all meeting objects of all exceptions and masters belonging to the same series.|
|ClientBuildVersion|Outlook client build version.|
|ClientInfoString|The entity that made the change (for example, `Client=OWA;<AdditionalDetails>, Client=WebServices;<AdditionalDetails>;`, or `Client=TBA;Service=MSExchangeMailboxAssistants;Action=ELCAssistant;`).|
|ClientIntent|What the intent of the client is from any changes that are made to the item.|
|ClientProcessName|Client process name (for example, OUTLOOK.EXE).|
|ConferenceInfo|ConferenceInfo property is used by legacy online meeting and by calling the UCWA APIs we've updated the meeting.|
|ConferenceTelURI|The conference tel uri for online meeting.|
|ConferenceType|The type of conferencing that will be used during the meeting.|
|ConnectedCalendarEventSourceData|Property that contains the data of a connected calendar event as received from source.|
|CreationHash|A hash that identifies the original request to create an event.|
|CreationTime|Creation time of the item.|
|DisallowNewTimeProposal|Specifies whether recipients of the meeting request can propose a new time for the meeting.|
|DisplayAttendeesAll|List of All the Attendees.|
|DisplayAttendeesCc|Who to display the Attendees list CC line.|
|DisplayAttendeesTo|Who to display the Attendees list in To line.|
|DoNotForward|Organizer wants to prevent attendees from inviting others.|
|Duration|Duration in minutes.|
|EndTimeZoneId|Time zone of the end of the meeting.|
|EndTimeZone|Defines the EndTimeZone property.|
|EndTime|End time of a calendar item.|
|EndWallClock|The end time of the meeting expressed in the time zone of the meeting.|
|EnhancedLocation|Indicates that Enhanced Location data is present, has value : Microsoft.Exchange.Data.Storage.EnhancedLocation.|
|EntryId|The store entry id or PR_ENTRYID (MAPI).|
|EstimatedAcceptCount|An estimated count of the number of attendees which accepted a meeting.|
|EstimatedAttendeeCount|An estimated count of the number of attendees of a meeting.|
|EstimatedDeclineCount|An estimated count of the number of attendees which declined a meeting.|
|EstimatedTentativeCount|An estimated count of the number of attendees which tentatively accepted a meeting.|
|EventClientId|Client-generated string representing id for series of calendar events.|
|EventDraft|Flag indicating whether calendar event is in the draft state.|
|EventResponseTrackingSource|Event response tracking status.|
|EventTimeBasedInboxRemindersState|Property that contains the state for time-based inbox reminders pertaining to calendar events.|
|EventTimeBasedInboxReminders|Property that contains time-based inbox reminders pertaining to calendar events.|
|ExceptionReplaceTime|The exception replace time.|
|ExceptionalAttendees|Bool value whether there are Exceptional Attendees.|
|ExceptionalBody|Bool value whether there are Exceptional Body is changed.|
|ExternalSharingMasterId|If copy of remote calendar in shared in calendar do not set organizer as it is not simply owner of a current mailbox It will sync back from master copy where it will be evaluated properly at save.|
|ForwardNotificationRecipients|List of Forwarded Recipients.|
|FreeBusyStatus|Free/busy status associated with the event.|
|From|From e-mail address.|
|GlobalObjectId|GlobalObjectId is a binary blob used to correlate the meeting requests/responses/cancellations in the Inbox with the meeting item in the Calendar.|
|HasAttachment|Value indicating whether the item has attachments.|
|HasExceptionalInboxReminders|Whether a series has any exceptional inbox reminders.|
|HijackedMeeting|Indicates if the meeting request was hijacked, useful to identify if if specific meetings aren't processed, because another user Hijacked the meeting.|
|Importance|Importance status of the email (for example, Normal).|
|InboundICalStream|Contains the contents of the iCalendar MIME part of the original MIME message.|
|InstanceCreationIndex|The index of this instance when the series was originally created.|
|IntendedFreeBusyStatus|Value representing the intended free/busy status of the meeting.|
|InternetMessageId|Internet Message Id of the e-mail message.|
|IsAllDayEvent|Value indicating whether this appointment is an all day event.|
|IsBirthdayContactWritable|Property used to indicate whether or not the contact associated with the birthday event is writable.|
|IsCancelled|Bool value whether or not the meeting is cancelled.|
|IsCopyOnWriteItem|Indicator for Calendar Logging items.|
|IsDraft|Bool value indicating whether the item is is a draft. An item is a draft when it has not yet been sent.|
|IsEvent|Indicates if the meeting should be displayed in banner for event, not calendar grid area.|
|IsException|Value indicating whether the calendar event is an exception in a recurring series.|
|IsHiddenFromLegacyClients|Flag deciding whether modern calendar item should be hidden for legacy clients.|
|IsMeetingPollEvent|Is meeting poll event boolean flag.|
|IsMeeting|Value indicating whether the calendar event is a meeting.|
|IsProcessed|True if the message has been processed either by XSO or by Outlook.|
|IsPublishedCalendarItem|Whether a calendar event (schedule) has been published.|
|IsRecurring|Value indicating whether the calendar event is recurring.|
|IsResponseRequested|Value indicating whether responses are requested when invitations are sent for this meeting.|
|IsSeriesCancelled|Expected to be true for the attendee if the recurring master is cancelled.|
|IsSilent|Returns True if the response doesn't contain any body text.|
|IsSingleBodyICal|Indicates that the original MIME message contained a single MIME part.|
|IsSoftDeleted|True only if the object is soft-deleted.|
|ItemClass|Contains a text string that identifies the sender-defined message class, such as IPM.Note.|
|ItemId|Object Store ItemId.|
|ItemVersion|Version of the item.|
|LastModifiedTime|Gets the date and time this item was last modified.|
|LocationAddressInternal|One of the properties that define the enhanced location and their corresponding default values.|
|Location|Gets the location of the calendar event.|
|MFNAddedRecipients|The list of recipients that were explicitly forwarded.|
|MailboxDatabaseName|Mailbox Database Exchange DistinguishedName.|
|MapiEndTime|EndTime of Meeting.|
|MapiIsAllDayEvent|An all-day event is midnight to midnight.|
|MapiPREndDate|MapiPR(Pattern Recurrence) EndDate of Meeting.|
|MapiPRStartDate|MapiPR(Pattern Recurrence) StartDate of Meeting.|
|MapiStartTime|StartTime of Meeting.|
|MasterGlobalObjectId|Holds the original GUID of the item in case another process needs to change it.|
|MeetingRequestType|Defines the type of meeting request.|
|MeetingRequestWasSent|Value indicating whether the meeting request has already been sent.|
|MeetingUniqueId|Meeting unique ID used to link meeting history to master meeting item.|
|MeetingWorkspaceUrl|URL of the meeting workspace. A meeting workspace is a shared Web site for planning meetings and tracking results.|
|MiddleTierProcessName|ProcessName handling the request (for example, w3wp).|
|MiddleTierServerBuildVersion|EXO Build Version.|
|MiddleTierServerName|Backend Mailbox ServerName.|
|NormalizedSubject|Subject of the meeting.|
|OccurrencesExceptionalViewProperties|Blob representing the exceptional properties of instances of an NPR.|
|OldLocation|Saved old location before updating new location.|
|OldStartWhole|Old time properties on the updated meeting request.|
|OnlineMeetingConfLink|The online meeting link.|
|OnlineMeetingExternalLink|The online meeting external link.|
|OnlineMeetingInformation|The online meeting information.|
|OnlineMeetingInternalLink|Represents the https uri for joining the Lync online meeting. Deprecated.|
|OriginalClientInfoString|Some processes are touching the ClientInfoString, so we need to backup the original value for Calendar Logging items.|
|OriginalCreationTime|Creation time of the item.|
|OriginalEntryId|Original `PR_ENTRYID` (MAPI), unique Id identifier in store.|
|OriginalFolderId|Original `PR_FOLDERID` (MAPI), unique Id identifier in store.|
|OriginalGlobalObjectId|Holds the original GUID of the item in case we have to change it.|
|OriginalICal|Holds the original iCal of an imported item.|
|OriginalLastModifiedTime|Used as the primary sort field to order the events.|
|OriginalMeetingType|Retains the original MeetingType in case the original meeting type is reset.|
|OriginalStoreEntryId|Maintains a copy of the store entry id if the original gets modified.|
|OwnerAppointmentID|This property is supposed to be a number that is unique to the sender's calendar. Outlook uses this number to correlate meeting messages with calendar items.|
|OwnerCriticalChangeTime|DateTime tracking value for Owner Critical Change Time.|
|ParentDisplayName|ParentDisplayName of the Folder.|
|ParkedCorrelationId|Holds correlation id of parked message.|
|ParkedMessagesFolderEntryId|Holds the entry id of ParkedMessages folder.|
|Preview|Preview of the Email.|
|PropertyChangeMetadataProcessingFlags|Flags representing property change metadata processing behavior.|
|PropertyChangeMetadataRaw|Blob representing property change metadata for Series exception management purposes.|
|PublishedCalendarItemUrl|The url for a published calendar event (schedule).|
|RawAttendeeInformation|Stores raw attendee information provided by a client, to help troubleshoot and debug attendee translation issues.|
|ReceivedBy|Gets the ReceivedBy property of the e-mail message.|
|ReceivedRepresenting|Returns received on behalf display name for delegate meeting message own meeting.|
|RecipientType|Represents the recipient type of a recipient on the message.|
|RecurrencePattern|A date for which this pattern should be created.|
|ReminderIsSetInternal|True or False.|
|ReminderMinutesBeforeStartInternal|Reminder in minutes before the meeting starts.|
|ResponseState|Accepted, Tentative, Declined Response State.|
|ResponseType|Gets the type of response the attendee gave to the meeting invitation it received.|
|ResponsibleUserName|The LegacyExchangeDN value of the user who made the change (for example, `/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=BN6PR11MB1587/cn=Microsoft System Attendant` or `/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Recipients/cn=696eea97d3c449eab648920d03385efb-admin`).|
|SenderEmailAddress|SMTP Address who sent it.|
|Sensitivity|Defines the sensitivity of an item.|
|SentRepresentingDisplayName|The display name of the sent representing person.|
|SentRepresentingEmailAddress|Represents sent representing email address.|
|SentRepresentingEntryId|The entry id of the the sent representing person.|
|SentRepresentingType|The address type of the sent representing person.|
|SeriesId|String representing id for series of calendar events.|
|SeriesReminderIsSet|Flag indicating whether reminder is set for the whole series.|
|Size|Size in Bytes of the Meeting Message.|
|SkypeTeamsMeetingUrl|The meeting url for Teams meeting.|
|SkypeTeamsProperties|The relevant properties for Teams meeting.|
|StartTimeZoneId|Time zone of the start of the meeting.|
|StartTimeZone|Start timezone of a calendar item.|
|StartTime|Start time of a calendar item.|
|StartWallClock|The start time of the meeting expressed in the time zone of the meeting.|
|SuggestionCategory|Represents the suggestion category for the message.|
|TimeZoneBlob|Outlook time zone blob (from registry) for recurrence.|
|TimeZoneDefinitionEnd|Legacy time zone (ExchangeTimeZoneTime) blob for end time.|
|TimeZoneDefinitionRecurring|Legacy time zone (ExchangeTimeZoneTime) blob for recurrence.|
|TimeZoneDefinitionStart|Legacy time zone (ExchangeTimeZoneTime) blob for start time.|
|TimeZone|TimeZone value.|
|TransportMessageHeaders|Transport Message Header Information.|
|UCCapabilities|Represents the XML blob of OCS capabilities for the Lync online meeting.|
|UCInband|Represents the XML blob of Inband data for the Lync online meeting.|
|UCMeetingSettingSent|Represents the XML blob of all information related to the Lync online meeting.|
|UCMeetingSetting|Represents the XML blob of all information related to the Lync online meeting.|
|UCOpenedConferenceID|Represents the guid associated with this online meeting.|
|UnsendableRecipients|This property contains the recipient data for all unsendable recipients.|
|ViewEndTime|End time of a calendar item.|
|ViewStartTime|Start time of a calendar item.|
|When|The text returned by When is localized using the Exchange Server culture or using the culture specified in the PreferredCulture property of the ExchangeService object this appointment is bound to.|
