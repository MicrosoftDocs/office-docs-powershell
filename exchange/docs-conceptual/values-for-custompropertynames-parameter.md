---
title: Values for the CustomPropertyNames parameter
ms.author: chrisda
author: chrisda
manager: orspodek
ms.date: 9/7/2023
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
description: "Learn about the valid values for the CustomPropertyNames parameter on the Get-CalendarDiagnosticsLog cmdlet in Exchange Online PowerShell."
---

# Values for the CustomPropertyNames parameter in Exchange Online PowerShell

The _CustomPropertyNames_ parameter on the [Get-CalendarDiagnosticObjects](/powershell/module/exchangepowershell/get-calendardiagnosticobjects) cmdlet returns the specified properties in the results.

The article describes the valid values for the _CustomPropertyNames_ parameter.

|CustomPropertyNames|Description|
|---|---|
|AddOnlineMeetingOnFinalize|Add online meeting on finalize flag.|
|AllAttachmentsHidden|Displays whether there are non-inline attachments inside a protected message.|
|AppointmentAuxiliaryFlags|Detect whether the meeting request is a forwarded meeting (for example, IsForwardedMeeting or AttendeeCount).|
|AppointmentClass|The MessageClass of the calendar that the meeting message is created from.|
|AppointmentCounterEndWhole|End time proposal.|
|AppointmentCounterProposalCount|Current counter proposal count.|
|AppointmentCounterProposal|Indicates whether a Meeting Response object is a counter proposal.|
|AppointmentCounterStartWhole|Start time proposal.|
|AppointmentLastSequenceNumber|If AppointmentSequenceNumber doesn't match, use AppointmentLastSequenceNumber to decide if this is a stale incoming request.|
|AppointmentProposedDuration|Proposed duration of the meeting in total minutes.|
|AppointmentRecurrenceBlob|Holds a copy of recurring information only from Recurring Masters.|
|AppointmentRecurring|Boolean value indicating whether an Appointment is recurring.|
|AppointmentReplyName|The calendar item appointment reply name.|
|AppointmentReplyTime|Gets the time when the attendee replied to the meeting request.|
|AppointmentSequenceNumber|Gets the sequence number of this appointment.|
|AppointmentSequenceTime|A sequence number that's incremented on every modification.|
|AppointmentStateInternal|The state of this appointment (for example, Meeting or Received).|
|AppointmentState|The state of this appointment (for example, Meeting or Received).|
|AttendeeCriticalChangeTime|The attendee's critical change time.|
|BirthdayContactAttributionDisplayName|Indicates the name of the contact that's associated with the birthday event.|
|BirthdayContactId|Represents the birthday contact ID property.|
|BirthdayPersonId|Represents the birthday person ID property that's used to associate multiple contact objects to a single, aggregate person.|
|Birthday|Birthday of the contact.|
|CalendarItemExperienceTypeInternal|Experience type for a calendar item. Used by the client to render custom user experiences for different types of calendar items.|
|CalendarItemType|The Calendar Item Type (for example, RecurringMaster).|
|CalendarLogTriggerAction|The action that's taken on the item (for example, Create or Update).|
|CalendarOriginatorId|Identification of the organizer to prevent unintentional takeover of a meeting by other users.|
|CalendarProcessed|Check if XSO has processed the meeting message.|
|CalendarProcessingSteps|A set of flags for the various steps that were completed in the stages of processing.|
|ChangeHighlight|Encapsulates information on the change highlights of a meeting request.|
|ChangeList|Add item to change list.|
|Charm|Charm on a calendar folder or item.|
|CleanGlobalObjectId|The GlobalObjectId with the Instance Date segment zeroed out. This property is the same for all meeting objects of all exceptions and masters belonging to the same series.|
|ClientBuildVersion|Outlook client build version.|
|ClientInfoString|The entity that made the change (for example, `Client=OWA;<AdditionalDetails>, Client=WebServices;<AdditionalDetails>;`, or `Client=TBA;Service=MSExchangeMailboxAssistants;Action=ELCAssistant;`).|
|ClientIntent|The intent of the client from any changes that are made to the item.|
|ClientProcessName|Client process name (for example, OUTLOOK.EXE).|
|ConferenceInfo|Used by legacy online meetings and by calling the UCWA APIs.|
|ConferenceTelURI|The conference telephone URI for online meeting.|
|ConferenceType|The type of conferencing that's used during the meeting.|
|ConnectedCalendarEventSourceData|Contains the data of a connected calendar event as received from the source.|
|CreationHash|A hash that identifies the original request to create an event.|
|CreationTime|Creation time of the item.|
|DisallowNewTimeProposal|Specifies whether recipients of the meeting request can propose a new time for the meeting.|
|DisplayAttendeesAll|List of all attendees.|
|DisplayAttendeesCc|Display the Attendees list in the Cc line.|
|DisplayAttendeesTo|Display the Attendees list in the To line.|
|DoNotForward|Organizer wants to prevent attendees from inviting others.|
|Duration|Duration in minutes.|
|EndTimeZoneId|Time zone of the end of the meeting.|
|EndTimeZone|Defines the EndTimeZone property.|
|EndTime|End time of a calendar item.|
|EndWallClock|The end time of the meeting expressed in the time zone of the meeting.|
|EnhancedLocation|Indicates that Enhanced Location data is present. Has value Microsoft.Exchange.Data.Storage.EnhancedLocation.|
|EntryId|The store entry ID or PR_ENTRYID (MAPI).|
|EstimatedAcceptCount|An estimated count of the number of attendees who accepted the meeting.|
|EstimatedAttendeeCount|An estimated count of the number of attendees of the meeting.|
|EstimatedDeclineCount|An estimated count of the number of attendees who declined the meeting.|
|EstimatedTentativeCount|An estimated count of the number of attendees who tentatively accepted the meeting.|
|EventClientId|Client-generated string representing the ID for a series of calendar events.|
|EventDraft|Indicates whether the calendar event is in the draft state.|
|EventResponseTrackingSource|Event response tracking status.|
|EventTimeBasedInboxRemindersState|Contains the state for time-based Inbox reminders pertaining to calendar events.|
|EventTimeBasedInboxReminders|Contains time-based Inbox reminders pertaining to calendar events.|
|ExceptionReplaceTime|The exception replace time.|
|ExceptionalAttendees|Boolean value indicating whether there are Exceptional Attendees.|
|ExceptionalBody|Boolean value indicating whether there are Exceptional Body is changed.|
|ExternalSharingMasterId|If a copy of a remote calendar in shared in the calendar, don't set the organizer, because the organizer isn't simply the owner of the current mailbox. It syncs back from master copy where it's properly evaluated when saved.|
|ForwardNotificationRecipients|List of Forwarded Recipients.|
|FreeBusyStatus|Free/busy status associated with the event.|
|From|From email address.|
|GlobalObjectId|A binary blob used to correlate the meeting requests/responses/cancellations in the Inbox with the meeting item in the Calendar.|
|HasAttachment|Indicates whether the item has attachments.|
|HasExceptionalInboxReminders|Whether a series has any exceptional Inbox reminders.|
|HijackedMeeting|Indicates whether the meeting request was hijacked. Useful to identify specific meetings that weren't processed because another user hijacked the meeting.|
|Importance|Importance status of the email (for example, Normal).|
|InboundICalStream|The contents of the iCalendar MIME part of the original MIME message.|
|InstanceCreationIndex|The index of this instance when the series was originally created.|
|IntendedFreeBusyStatus|The intended free/busy status of the meeting.|
|InternetMessageId|Internet Message ID of the e-mail message.|
|IsAllDayEvent|Indicates whether this appointment is an all day event.|
|IsBirthdayContactWritable|Indicates whether the contact that's associated with the birthday event is writable.|
|IsCancelled|Boolean value indicating whether the meeting is canceled.|
|IsCopyOnWriteItem|Indicator for Calendar Logging items.|
|IsDraft|Boolean value indicating whether the item is a draft. An item is a draft when it hasn't yet been sent.|
|IsEvent|Indicates if the meeting should be displayed in a banner for the event, not in the calendar grid area.|
|IsException|Indicates whether the calendar event is an exception in a recurring series.|
|IsHiddenFromLegacyClients|Decides whether the modern calendar item should be hidden for legacy clients.|
|IsMeetingPollEvent|Boolean value indicating whether the item is a meeting poll event.|
|IsMeeting|Boolean value indicating whether the calendar event is a meeting.|
|IsProcessed|Boolean value indicating whether the message was processed by XSO or by Outlook.|
|IsPublishedCalendarItem|Boolean value indicating whether a calendar event (schedule) has been published.|
|IsRecurring|Boolean value indicating whether the calendar event is recurring.|
|IsResponseRequested|Boolean value indicating whether responses are requested when invitations are sent for this meeting.|
|IsSeriesCancelled|Boolean value indicating whether the recurring master is canceled. Expected to be True for the attendee.|
|IsSilent|Boolean value indicating if the response doesn't contain message body text.|
|IsSingleBodyICal|Boolean value indicating that the original MIME message contained a single MIME part.|
|IsSoftDeleted|Boolean value indicating if the object is soft-deleted.|
|ItemClass|A text string that identifies the sender-defined message class (for example, IPM.Note).|
|ItemId|Object Store ItemId.|
|ItemVersion|Version of the item.|
|LastModifiedTime|The date/time that this item was last modified.|
|LocationAddressInternal|One of the properties that define the enhanced location and their corresponding default values.|
|Location|Gets the location of the calendar event.|
|MFNAddedRecipients|The list of recipients that were explicitly forwarded.|
|MailboxDatabaseName|The distinguished name (DN) of the mailbox database.|
|MapiEndTime|EndTime of Meeting.|
|MapiIsAllDayEvent|An all-day event is midnight to midnight.|
|MapiPREndDate|MapiPR(Pattern Recurrence) EndDate of Meeting.|
|MapiPRStartDate|MapiPR(Pattern Recurrence) StartDate of Meeting.|
|MapiStartTime|StartTime of Meeting.|
|MasterGlobalObjectId|The original GUID of the item if another process needs to change it.|
|MeetingRequestType|Defines the type of meeting request.|
|MeetingRequestWasSent|Indicates whether the meeting request has already been sent.|
|MeetingUniqueId|Unique meeting ID that's used to link meeting history to the master meeting item.|
|MeetingWorkspaceUrl|URL of the meeting workspace. A meeting workspace is a shared website for planning meetings and tracking results.|
|MiddleTierProcessName|ProcessName handling the request (for example, w3wp).|
|MiddleTierServerBuildVersion|EXO Build Version.|
|MiddleTierServerName|Backend Mailbox ServerName.|
|NormalizedSubject|Subject of the meeting.|
|OccurrencesExceptionalViewProperties|Blob representing the exceptional properties of instances of an NPR.|
|OldLocation|Saved old location before updating the new location.|
|OldStartWhole|Old time properties on the updated meeting request.|
|OnlineMeetingConfLink|The online meeting link.|
|OnlineMeetingExternalLink|The online meeting external link.|
|OnlineMeetingInformation|The online meeting information.|
|OnlineMeetingInternalLink|The HTTPS URI for joining the Lync online meeting. Deprecated.|
|OriginalClientInfoString|Some processes are touching the ClientInfoString, so we need to back up the original value for Calendar Logging items.|
|OriginalCreationTime|Creation time of the item.|
|OriginalEntryId|Original `PR_ENTRYID` (MAPI), unique ID identifier in store.|
|OriginalFolderId|Original `PR_FOLDERID` (MAPI), unique ID identifier in store.|
|OriginalGlobalObjectId|The original GUID of the item in case we have to change it.|
|OriginalICal|The original iCal of an imported item.|
|OriginalLastModifiedTime|Used as the primary sort field to order the events.|
|OriginalMeetingType|Retains the original MeetingType in case the original meeting type is reset.|
|OriginalStoreEntryId|Maintains a copy of the store entry ID if the original gets modified.|
|OwnerAppointmentID|A number that's unique to the sender's calendar. Outlook uses this number to correlate meeting messages with calendar items.|
|OwnerCriticalChangeTime|DateTime tracking value for Owner Critical Change Time.|
|ParentDisplayName|ParentDisplayName of the Folder.|
|ParkedCorrelationId|The correlation ID of parked message.|
|ParkedMessagesFolderEntryId|The entry ID of the ParkedMessages folder.|
|Preview|Preview of the email message.|
|PropertyChangeMetadataProcessingFlags|Flags representing property change metadata processing behavior.|
|PropertyChangeMetadataRaw|Blob representing property change metadata for Series exception management purposes.|
|PublishedCalendarItemUrl|The URL of a published calendar event (schedule).|
|RawAttendeeInformation|Raw attendee information provided by a client. Used to help troubleshoot and debug attendee translation issues.|
|ReceivedBy|The ReceivedBy property of the email message.|
|ReceivedRepresenting|Returns the received on behalf display name for delegate meeting message own meeting.|
|RecipientType|The recipient type of a recipient on the message.|
|RecurrencePattern|A date for which this pattern should be created.|
|ReminderIsSetInternal|Boolean value indicating whether the reminder is set internally.|
|ReminderMinutesBeforeStartInternal|Reminder in minutes before the meeting starts.|
|ResponseState|Values are Accepted, Tentative, or Declined.|
|ResponseType|Gets the type of response the attendee gave to the meeting invitation it received.|
|ResponsibleUserName|The LegacyExchangeDN value of the user who made the change (for example, `/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=BN6PR11MB1587/cn=Microsoft System Attendant` or `/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Recipients/cn=696eea97d3c449eab648920d03385efb-admin`).|
|SenderEmailAddress|SMTP address of who sent it.|
|Sensitivity|The sensitivity of an item.|
|SentRepresentingDisplayName|The display name of the sent representing person.|
|SentRepresentingEmailAddress|Represents sent representing email address.|
|SentRepresentingEntryId|The entry ID of the sent representing person.|
|SentRepresentingType|The address type of the sent representing person.|
|SeriesId|Representing ID for series of calendar events.|
|SeriesReminderIsSet|Flag indicating whether a reminder is set for the whole series.|
|Size|Size in bytes of the Meeting Message.|
|SkypeTeamsMeetingUrl|The meeting URL for a Teams meeting.|
|SkypeTeamsProperties|The relevant properties for a Teams meeting.|
|StartTimeZoneId|Time zone of the start of the meeting.|
|StartTimeZone|Start timezone of a calendar item.|
|StartTime|Start time of a calendar item.|
|StartWallClock|The start time of the meeting expressed in the time zone of the meeting.|
|SuggestionCategory|The suggestion category for the message.|
|TimeZoneBlob|Outlook time zone blob (from the registry) for recurrence.|
|TimeZoneDefinitionEnd|Legacy time zone (ExchangeTimeZoneTime) blob for end time.|
|TimeZoneDefinitionRecurring|Legacy time zone (ExchangeTimeZoneTime) blob for recurrence.|
|TimeZoneDefinitionStart|Legacy time zone (ExchangeTimeZoneTime) blob for start time.|
|TimeZone|TimeZone value.|
|TransportMessageHeaders|Transport Message Header Information.|
|UCCapabilities|The XML blob of OCS capabilities for the Lync online meeting.|
|UCInband|The XML blob of Inband data for the Lync online meeting.|
|UCMeetingSettingSent|The XML blob of all information related to the Lync online meeting.|
|UCMeetingSetting|The XML blob of all information related to the Lync online meeting.|
|UCOpenedConferenceID|RThe guid associated with this online meeting.|
|UnsendableRecipients|Recipient data for all unsendable recipients.|
|ViewEndTime|End time of a calendar item.|
|ViewStartTime|Start time of a calendar item.|
|When|Localized text using the Exchange Server culture or the culture specified in the PreferredCulture property of the ExchangeService object that this appointment is bound to.|
