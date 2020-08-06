---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-calendardiagnosticobjects
applicable: Exchange Online
title: Get-CalendarDiagnosticObjects
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-CalendarDiagnosticObjects

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-CalendarDiagnosticObjects cmdlet to collect a range of calendar logs. The calendar diagnostic logs track important calendar-related event data for each mailbox, and can be used to troubleshoot calendar issues that occur in mailboxes. The logs track all calendar items and meeting messages.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-CalendarDiagnosticObjects [-Identity] <UnifiedGroupOrUserMailboxIdParameter>
 [-CustomPropertyNames <String[]>]
 [-DomainController <Fqdn>]
 [-EndDate <ExDateTime>]
 [-EntryId <String>]
 [-ExactMatch <Boolean>]
 [-ItemClass <String[]>]
 [-ItemIds <String[]>]
 [-MeetingId <String>]
 [-ReadFromDomainController]
 [-ResultSize <Unlimited>]
 [-ShouldBindToItem <Boolean>]
 [-ShouldFetchRecurrenceExceptions <Boolean>]
 [-StartDate <ExDateTime>]
 [-Subject <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Some of the more interesting properties that are returned in the results are:

- AppointmentState: 1 = The appointment is a meeting, 2 = The appointment has been received, 4 = The appointment has been cancelled, and 8 = the appointment is a forwarded appointment.

- CalendarLogTriggerAction: The action that's taken on the item (for example, Create or Update).

- ClientInfoString: The entity that made the change (for example, Client=OWA;\<AdditionalDetails\>, Client=WebServices;\<AdditionalDetails\>;, or Client=TBA;Service=MSExchangeMailboxAssistants;Action=ELCAssistant;).

- MeetingRequestType: 1 = The meeting message is a meeting request, 65536 = The meeting message is a full update to an existing meeting, 131072 = The meeting message is an informational update to an existing meeting, 262144 = The meeting message is a silent update, 524288 = The update is outdated, or 1048576 = The meeting message is forwarded to a delegate, and the copy is marked as informational.

- OriginalLastModifiedTime: Used as the primary sort field to order the events.

- ResponseType: 0 = The organizer hasn't received a response, 1 = The organizer's copy of the meeting, 2 = Tentative, 3 = Accept, 4 = Decline, or 5 = The attendee hasn't responded.

- ResponsibleUserName: The LegacyExchangeDN value of the user who made the change (for example, /o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=BN6PR11MB1587/cn=Microsoft System Attendant or /o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Recipients/cn=696eea97d3c449eab648920d03385efb-admin).
### Get-CalendarDiagnosticObjects CustomPropertyName Values and Descriptions

CustomPropertyNames                       | Description                                                                                                                                                                                                                                                                                                                                                                                                    
----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
OriginalLastModifiedTime                  | Used as the primary sort field to order the events.                                                                                                                                                                                                                                                                                                                                                            
CalendarLogTriggerAction                  | The action thats taken on the item (for example, Create or Update).                                                                                                                                                                                                                                                                                                                                            
OriginalClientInfoString                  | Some processes are touching the ClientInfoString, so we need to backup the original value for Calendar Logging items                                                                                                                                                                                                                                                                                           
ClientInfoString                          | The entity that made the change (for example, Client=OWA;<AdditionalDetails>, Client=WebServices;<AdditionalDetails>;, or Client=TBA;Service=MSExchangeMailboxAssistants;Action=ELCAssistant;).                                                                                                                                                                                                                
ItemClass                                 | Contains a text string that identifies the sender-defined message class, such as IPM.Note                                                                                                                                                                                                                                                                                                                      
ItemVersion                               | Version of the item                                                                                                                                                                                                                                                                                                                                                                                            
ParentDisplayName                         | ParentDisplayName of the Folder                                                                                                                                                                                                                                                                                                                                                                                
AppointmentAuxiliaryFlags                 | Detect whether the meeting request is a forwarded meeting .e.g IsForwardedMeeting or AttendeeCount                                                                                                                                                                                                                                                                                                             
AppointmentRecurrenceBlob                 | Holds a copy of recurring information only from Recurring Masters                                                                                                                                                                                                                                                                                                                                              
AppointmentSequenceNumber                 | Gets the sequence number of this appointment                                                                                                                                                                                                                                                                                                                                                                   
AppointmentState                          | Gets the state of this appointment                                                                                                                                                                                                                                                                                                                                                                             
CalendarOriginatorId                      | Set the calendar originator Id to the owner of this mailbox since it is a new calendar item being create                                                                                                                                                                                                                                                                                                       
ChangeList                                | Add item to change list                                                                                                                                                                                                                                                                                                                                                                                        
CleanGlobalObjectId                       | CleanGlobalObjectID is just the GlobalObjectId with the Instance Date segment zeroed out.  This property will be the same for all meeting objects of all exceptions and masters belonging to the same series.                                                                                                                                                                                                  
ClientIntent                              | What the intent of the client is from any changes that are made to the item                                                                                                                                                                                                                                                                                                                                    
CreationTime                              | Creation time of the item                                                                                                                                                                                                                                                                                                                                                                                      
DisplayAttendeesAll                       | List of All the Attendees                                                                                                                                                                                                                                                                                                                                                                                      
EndTime                                   | End time of a calendar item                                                                                                                                                                                                                                                                                                                                                                                    
EndTimeZone                               | Defines the EndTimeZone property                                                                                                                                                                                                                                                                                                                                                                               
GlobalObjectId                            | GlobalObjectId is a binary blob used to correlate the meeting requests/responses/cancellations in the Inbox with the meeting item in the Calendar.                                                                                                                                                                                                                                                             
IsCopyOnWriteItem                         | Indicator for Calendar Logging items                                                                                                                                                                                                                                                                                                                                                                           
IsException                               | Value indicating whether the calendar event is an exception in a recurring series                                                                                                                                                                                                                                                                                                                              
IsPreservedDeclinedMeeting                | Is meeting declined by the user preserved on the user's calendar                                                                                                                                                                                                                                                                                                                                               
IsProcessed                               | True if the message has been processed either by XSO or by Outlook                                                                                                                                                                                                                                                                                                                                             
IsRecurring                               | Value indicating whether the calendar event is recurring                                                                                                                                                                                                                                                                                                                                                       
IsResponseRequested                       | Value indicating whether responses are requested when invitations are sent for this meeting                                                                                                                                                                                                                                                                                                                    
IsSeriesCancelled                         | IsSeriesCancelled is expected to be true for the atteendee if the recurring master is cancelled                                                                                                                                                                                                                                                                                                                
ItemId                                    | Object Store ItemId                                                                                                                                                                                                                                                                                                                                                                                            
LastModifiedTime                          | Gets the date and time this item was last modified                                                                                                                                                                                                                                                                                                                                                             
Location                                  | Gets the location of the calendar event                                                                                                                                                                                                                                                                                                                                                                        
MapiIsAllDayEvent                         | An all-day event is midnight to midnight                                                                                                                                                                                                                                                                                                                                                                       
MapiPREndDate                             | MapiPR(Pattern Recurrence) EndDate of Meeting                                                                                                                                                                                                                                                                                                                                                                  
MapiPRStartDate                           | MapiPR(Pattern Recurrence) StartDate of Meeting                                                                                                                                                                                                                                                                                                                                                                
MasterGlobalObjectId                      | Holds the original GOID of the item in case another process needs to change it.                                                                                                                                                                                                                                                                                                                                
MeetingRequestType                        | Defines the type of meeting request                                                                                                                                                                                                                                                                                                                                                                            
NormalizedSubject                         | Subject of the meeting                                                                                                                                                                                                                                                                                                                                                                                         
OriginalCreationTime                      | Creation time of the item                                                                                                                                                                                                                                                                                                                                                                                      
OriginalGlobalObjectId                    | Holds the original GOID of the item in case we have to change it.                                                                                                                                                                                                                                                                                                                                              
ReceivedBy                                | Gets the ReceivedBy property of the e-mail message                                                                                                                                                                                                                                                                                                                                                             
ReceivedRepresenting                      | Returns received on behalf display name for delegate meeting message own meeting                                                                                                                                                                                                                                                                                                                               
RecurrencePattern                         | A date for which this pattern should be created                                                                                                                                                                                                                                                                                                                                                                
ResponseState                             | Accepted, Tentative, Declined Response State                                                                                                                                                                                                                                                                                                                                                                   
ResponsibleUserName                       | The LegacyExchangeDN value of the user who made the change (for example, /o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=BN6PR11MB1587/cn=Microsoft System Attendant or /o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Recipients/cn=696eea97d3c449eab648920d03385efb-admin).                                                         
SenderEmailAddress                        | SMTP Address who sent it                                                                                                                                                                                                                                                                                                                                                                                       
SentRepresentingEmailAddress              | Represents sent representing email address                                                                                                                                                                                                                                                                                                                                                                     
SeriesId                                  | String representing id for series of calendar events                                                                                                                                                                                                                                                                                                                                                           
SeriesMasterId                            | The ID of the master item of an NPR instance                                                                                                                                                                                                                                                                                                                                                                   
SeriesSequenceNumber                      | The sequence number of an NPR-Related message                                                                                                                                                                                                                                                                                                                                                                  
StartTime                                 | Start time of a calendar item                                                                                                                                                                                                                                                                                                                                                                                  
StartTimeZone                             | Start timezone of a calendar item                                                                                                                                                                                                                                                                                                                                                                              
TimeZone                                  | TimeZone value                                                                                                                                                                                                                                                                                                                                                                                                 
TimeZoneBlob                              | Outlook time zone blob (from registry) for recurrence                                                                                                                                                                                                                                                                                                                                                          
TimeZoneDefinitionEnd                     | Legacy time zone (ExchangeTimeZoneTime) blob for end time                                                                                                                                                                                                                                                                                                                                                      
TimeZoneDefinitionRecurring               | Legacy time zone (ExchangeTimeZoneTime) blob for recurrence                                                                                                                                                                                                                                                                                                                                                    
TimeZoneDefinitionStart                   | Legacy time zone (ExchangeTimeZoneTime) blob for start time                                                                                                                                                                                                                                                                                                                                                    
ViewEndTime                               | End time of a calendar item                                                                                                                                                                                                                                                                                                                                                                                    
ViewStartTime                             | Start time of a calendar item                                                                                                                                                                                                                                                                                                                                                                                  
AbchContactId                             | Id for this contact in ABCH                                                                                                                                                                                                                                                                                                                                                                                    
AbchPersonId                              | Internal ID for a person object in ABCH(Address Book Clearing House MSA and Skype Based Service) supports explicit, implicit and 3rd party relationships for any MSA or?SkypeID?users                                                                                                                                                                                                                          
AbchPersonIdGuid                          | PersonIDGuid object in ABCH(Address Book Clearing House MSA and Skype Based Service supports explicit, implicit and 3rd party relationships for any MSA or?SkypeID?users                                                                                                                                                                                                                                       
AddOnlineMeetingOnFinalize                | Add online meeting on finalize flag                                                                                                                                                                                                                                                                                                                                                                            
AllAttachmentsHidden                      | The AllAttachmentsHidden property displays whether or not there are non-inline attachments inside the protected message.                                                                                                                                                                                                                                                                                       
AppointmentClass                          | AppointmentClass is the MessageClass of the calendar item from which a meeting message is created.                                                                                                                                                                                                                                                                                                             
AppointmentColor                          | Calendar Item Color                                                                                                                                                                                                                                                                                                                                                                                            
AppointmentCounterEndWhole                | End time proposal                                                                                                                                                                                                                                                                                                                                                                                              
AppointmentCounterProposal                | Indicates whether a Meeting Response object is a counter proposal                                                                                                                                                                                                                                                                                                                                              
AppointmentCounterProposalCount           | Current counter proposal count                                                                                                                                                                                                                                                                                                                                                                                 
AppointmentCounterStartWhole              | Start time proposal                                                                                                                                                                                                                                                                                                                                                                                            
AppointmentExtractTime                    | A UTC time that indicates the time when the above software copied the properties to the calendar item                                                                                                                                                                                                                                                                                                          
AppointmentExtractVersion                 | A 64-bit number indicating the version number of the software that copied the properties to the calendar item                                                                                                                                                                                                                                                                                                  
AppointmentLastSequenceNumber             | If AppointmentSequenceNumber doesn't match, then use AppointmentLastSequenceNumber to decide if this stale incoming request                                                                                                                                                                                                                                                                                    
AppointmentProposedDuration               | Proposed duration of the meeting in total minutes                                                                                                                                                                                                                                                                                                                                                              
AppointmentRecurring                      | Shows Bool True or False whether an Appointment is recurring                                                                                                                                                                                                                                                                                                                                                   
AppointmentReplyName                      | The calendar item appointment reply name.                                                                                                                                                                                                                                                                                                                                                                      
AppointmentReplyTime                      | Gets the time when the attendee replied to the meeting request                                                                                                                                                                                                                                                                                                                                                 
AppointmentSequenceTime                   | Every appointment has a sequence number that is incremented on every modification                                                                                                                                                                                                                                                                                                                              
AppointmentState                          | Gets the state of this appointment .e.g. Meeting, Received                                                                                                                                                                                                                                                                                                                                                     
AppointmentStateInternal                  | Gets the state of this appointment .e.g. Meeting, Received                                                                                                                                                                                                                                                                                                                                                     
AttendeeCriticalChangeTime                | The attendee's critical change time.                                                                                                                                                                                                                                                                                                                                                                           
AttendeeListDetails                       | Additional details for the list of attendees                                                                                                                                                                                                                                                                                                                                                                   
Birthday                                  | Birthday of the contact                                                                                                                                                                                                                                                                                                                                                                                        
BirthdayContactAttributionDisplayName     | Property used to indicate the name of the contact associated with the birthday event                                                                                                                                                                                                                                                                                                                           
BirthdayContactId                         | Represents the birthday contact ID property                                                                                                                                                                                                                                                                                                                                                                    
BirthdayPersonId                          | Represents the birthday person ID property used to associate multiple contact object to a single, aggregate person                                                                                                                                                                                                                                                                                             
CalendarInteropActionQueueHasDataInternal | Flag indication there are calendar interop pending actions                                                                                                                                                                                                                                                                                                                                                     
CalendarInteropActionQueueInternal        | Blob representing action queue for calendar interop pending actions                                                                                                                                                                                                                                                                                                                                            
CalendarItemExperienceTypeInternal        | Experience type for a calendar item, used by client to render custom user experiences for different types of calendar items                                                                                                                                                                                                                                                                                    
CalendarItemType                          | The Calendar Item Type e.g.  RecurringMaster                                                                                                                                                                                                                                                                                                                                                                   
CalendarProcessed                         | Check if the meeting message has been processed by XSO.                                                                                                                                                                                                                                                                                                                                                        
CalendarProcessingSteps                   | This is a set of flags for the various steps we completed in the stages of processing                                                                                                                                                                                                                                                                                                                          
ChangeHighlight                           | Encapsulates information on the changehighlights of a meeting request                                                                                                                                                                                                                                                                                                                                          
Charm                                     | Charm on a calendar folder or item                                                                                                                                                                                                                                                                                                                                                                             
ClientBuildVersion                        | Outlook client build version                                                                                                                                                                                                                                                                                                                                                                                   
ClientProcessName                         | Client process name .e.g OUTLOOK.EXE                                                                                                                                                                                                                                                                                                                                                                           
ClipEndTime                               | Maxiumum Supported EndTime                                                                                                                                                                                                                                                                                                                                                                                     
ClipStartTime                             | Minimum Supported StartTime                                                                                                                                                                                                                                                                                                                                                                                    
ConferenceInfo                            | ConferenceInfo property is used by legacy online meeting and by calling the UCWA APIs we've updated the meeting.                                                                                                                                                                                                                                                                                               
ConferenceTelURI                          | The conference tel uri for online meeting                                                                                                                                                                                                                                                                                                                                                                      
ConferenceType                            | The type of conferencing that will be used during the meeting                                                                                                                                                                                                                                                                                                                                                  
ConnectedCalendarEventSourceData          | Property that contains the data of a connected calendar event as received from source                                                                                                                                                                                                                                                                                                                          
CoOrganizerResponseTime                   | The time at which the coauthoring invitation was responded to                                                                                                                                                                                                                                                                                                                                                  
CoOrganizers                              | The list of co-organizers of the meeting                                                                                                                                                                                                                                                                                                                                                                       
CoOrganizerStatus                         | The coauthoring status of this item:  None, Pending, Accepted, or Declined                                                                                                                                                                                                                                                                                                                                     
CoOrganizerVerificationToken              | The verification token provided along with the co-organizer invitation                                                                                                                                                                                                                                                                                                                                         
CreationHash                              | A hash that identifies the original request to create an event                                                                                                                                                                                                                                                                                                                                                 
DeclinedOccurrencesBlob                   | An array of declined occurrences                                                                                                                                                                                                                                                                                                                                                                               
DisallowNewTimeProposal                   | Specifies whether recipients of the meeting request can propose a new time for the meeting                                                                                                                                                                                                                                                                                                                     
DisplayAttendeesCc                        | Who to display the Attendees list CC line                                                                                                                                                                                                                                                                                                                                                                      
DisplayAttendeesTo                        | Who to display the Attendees list in To line                                                                                                                                                                                                                                                                                                                                                                   
DoNotForward                              | Organizer wants to prevent attendees from inviting others.                                                                                                                                                                                                                                                                                                                                                     
Duration                                  | Duration in minutes                                                                                                                                                                                                                                                                                                                                                                                            
EndTimeZoneId                             | Time zone of the end of the meeting                                                                                                                                                                                                                                                                                                                                                                            
EndWallClock                              | The end time of the meeting expressed in the time zone of the meeting                                                                                                                                                                                                                                                                                                                                          
EnhancedLocation                          | Indicates that Enhanced Location data is present, has value : Microsoft.Exchange.Data.Storage.EnhancedLocation                                                                                                                                                                                                                                                                                                 
EntryId                                   | The store entry id or PR_ENTRYID(Mapi)                                                                                                                                                                                                                                                                                                                                                                         
EstimatedAcceptCount                      | An estimated count of the number of attendees which accepted a meeting                                                                                                                                                                                                                                                                                                                                         
EstimatedAttendeeCount                    | An estimated count of the number of attendees of a meeting                                                                                                                                                                                                                                                                                                                                                     
EstimatedDeclineCount                     | An estimated count of the number of attendees which declined a meeting                                                                                                                                                                                                                                                                                                                                         
EstimatedTentativeCount                   | An estimated count of the number of attendees which tentatively accepted a meeting                                                                                                                                                                                                                                                                                                                             
EventClientId                             | Client-generated string representing id for series of calendar events                                                                                                                                                                                                                                                                                                                                          
EventDraft                                | Flag indicating whether calendar event is in the draft state                                                                                                                                                                                                                                                                                                                                                   
EventEmailReminderTimer                   | Timer property for Event Email Reminders                                                                                                                                                                                                                                                                                                                                                                       
EventPushReminderTimer                    | Timer property for Push Notification Reminders                                                                                                                                                                                                                                                                                                                                                                 
EventResponseTrackingSource               | Event response tracking status                                                                                                                                                                                                                                                                                                                                                                                 
EventTimeBasedInboxReminders              | Property that contains time-based inbox reminders pertaining to calendar events                                                                                                                                                                                                                                                                                                                                
EventTimeBasedInboxRemindersState         | Property that contains the state for time-based inbox reminders pertaining to calendar events                                                                                                                                                                                                                                                                                                                  
ExceptionalAttendees                      | Bool value whether there are Exceptional Attendees                                                                                                                                                                                                                                                                                                                                                             
ExceptionalBody                           | Bool value whether there are Exceptional Body is changed                                                                                                                                                                                                                                                                                                                                                       
ExceptionReplaceTime                      | The exception replace time                                                                                                                                                                                                                                                                                                                                                                                     
ExternalSharingMasterId                   | If copy of remote calendar in shared in calendar do not set organizer as it is not simply owner of a current mailbox It will sync back from master copy where it will be evaluated properly at save.                                                                                                                                                                                                           
FinalizedMeetingPollSeriesId              | SeriesId of finalized meeting poll. Used in conjuction with FindTime an Outlook add-in for scheduling meetings. The organizer can send multiple time options through FindTime and minimize the back and forth emails in scheduling                                                                                                                                                                             
ForwardNotificationRecipients             | List of Forwarded Recipients                                                                                                                                                                                                                                                                                                                                                                                   
FreeBusyStatus                            | Free/busy status associated with the event                                                                                                                                                                                                                                                                                                                                                                     
From                                      | From e-mail address                                                                                                                                                                                                                                                                                                                                                                                            
HasAttachment                             | Value indicating whether the item has attachments                                                                                                                                                                                                                                                                                                                                                              
HasExceptionalInboxReminders              | Whether a series has any exceptional inbox reminders                                                                                                                                                                                                                                                                                                                                                           
HijackedMeeting                           | Indicates if the meeting request was hijacked, useful to identify if if specific meetings aren't processed, because another user Hijacked the meeting.                                                                                                                                                                                                                                                         
Importance                                | Importance status of the email, e.g. Normal                                                                                                                                                                                                                                                                                                                                                                    
InboundICalStream                         | Contains the contents of the iCalendar MIME partof the original MIME message.                                                                                                                                                                                                                                                                                                                                  
InstanceCreationIndex                     | The index of this instance when the series was originally created                                                                                                                                                                                                                                                                                                                                              
IntendedFreeBusyStatus                    | Value representing the intended free/busy status of the meeting                                                                                                                                                                                                                                                                                                                                                
InternetMessageId                         | Internet Message Id of the e-mail message                                                                                                                                                                                                                                                                                                                                                                      
IsAllDayEvent                             | Value indicating whether this appointment is an all day event                                                                                                                                                                                                                                                                                                                                                  
IsBirthdayContactWritable                 | Property used to indicate whether or not the contact associated with the birthday event is writable                                                                                                                                                                                                                                                                                                            
IsCancelled                               | Bool value whether or not the meeting is cancelled                                                                                                                                                                                                                                                                                                                                                             
IsDraft                                   | Bool value indicating whether the item is is a draft. An item is a draft when it has not yet been sent                                                                                                                                                                                                                                                                                                         
IsEvent                                   | Indicates if the meeting should be displayed in banner for event, not calendar grid area                                                                                                                                                                                                                                                                                                                       
IsHiddenFromLegacyClients                 | Flag deciding whether modern calendar item should be hidden for legacy clients                                                                                                                                                                                                                                                                                                                                 
IsMeeting                                 | Value indicating whether the calendar event is a meeting                                                                                                                                                                                                                                                                                                                                                       
IsMeetingPollEvent                        | Is meeting poll event boolean flag                                                                                                                                                                                                                                                                                                                                                                             
IsPublishedCalendarItem                   | Whether a calendar event (schedule) has been published                                                                                                                                                                                                                                                                                                                                                         
IsSilent                                  | Returns True if the response doesn't contain any body text                                                                                                                                                                                                                                                                                                                                                     
IsSingleBodyICal                          | Indicates that the original MIME message contained a single MIME part                                                                                                                                                                                                                                                                                                                                          
IsSoftDeleted                             | True only if the object is soft-deleted                                                                                                                                                                                                                                                                                                                                                                        
LastExecutedCalendarInteropAction         | Information on last executed calendar interop action                                                                                                                                                                                                                                                                                                                                                           
LocationAddressInternal                   | One of the properties that define the enhanced location and their corresponding default values                                                                                                                                                                                                                                                                                                                 
MailboxDatabaseName                       | Mailbox Database Exchange DistinguishedName                                                                                                                                                                                                                                                                                                                                                                    
MapiEndTime                               | EndTime of Meeting                                                                                                                                                                                                                                                                                                                                                                                             
MapiStartTime                             | StartTime of Meeting                                                                                                                                                                                                                                                                                                                                                                                           
MeetingPollAddAttendeesParametersBlob     | Blob representing serialized meeting poll add attendees parameters set on the series message.                                                                                                                                                                                                                                                                                                                  
MeetingPollAttendeesDataRaw               | Meeting poll attendees data                                                                                                                                                                                                                                                                                                                                                                                    
MeetingPollProposeOptionsParametersBlob   | Blob representing serialized meeting poll propose options parameters set on the series message                                                                                                                                                                                                                                                                                                                 
MeetingPollProposeOptionsRequestsBlob     | Blob representing serialized meeting poll propose options request set on the poll master                                                                                                                                                                                                                                                                                                                       
MeetingPollResponseParametersBlob         | Blob representing serialized meeting poll response parameters set on the series message                                                                                                                                                                                                                                                                                                                        
MeetingPollSystemEmailStatus              | Meeting poll system email status                                                                                                                                                                                                                                                                                                                                                                               
MeetingRequestWasSent                     | Value indicating whether the meeting request has already been sent                                                                                                                                                                                                                                                                                                                                             
MeetingUniqueId                           | Meeting unique ID used to link meeting history to master meeting item                                                                                                                                                                                                                                                                                                                                          
MeetingWorkspaceUrl                       | URL of the meeting workspace. A meeting workspace is a shared Web site for planning meetings and tracking results                                                                                                                                                                                                                                                                                              
MFNAddedRecipients                        | The list of recipients that were explicitly forwarded                                                                                                                                                                                                                                                                                                                                                          
MiddleTierProcessName                     | ProcessName handling the request e.g. w3wp                                                                                                                                                                                                                                                                                                                                                                     
MiddleTierServerBuildVersion              | EXO Build Version                                                                                                                                                                                                                                                                                                                                                                                              
MiddleTierServerName                      | Backend Mailbox ServerName                                                                                                                                                                                                                                                                                                                                                                                     
OccurrencesExceptionalViewProperties      | Blob representing the exceptional properties of instances of an NPR                                                                                                                                                                                                                                                                                                                                            
OldLocation                               | Saved old location before updating new location                                                                                                                                                                                                                                                                                                                                                                
OldStartWhole                             | Old time properties on the updated meeting request                                                                                                                                                                                                                                                                                                                                                             
OnlineMeetingConfLink                     | The online meeting link                                                                                                                                                                                                                                                                                                                                                                                        
OnlineMeetingExternalLink                 | The online meeting external link                                                                                                                                                                                                                                                                                                                                                                               
OnlineMeetingInformation                  | The online meeting information                                                                                                                                                                                                                                                                                                                                                                                 
OnlineMeetingInternalLink                 | Represents the https uri for joining the Lync online meeting. Deprecated                                                                                                                                                                                                                                                                                                                                       
OriginalEntryId                           | Original PR_ENTRYID(Mapi), unique Id identifier in store                                                                                                                                                                                                                                                                                                                                                       
OriginalFolderId                          | Original PR_FOLDERID(Mapi), unique Id identifier in store                                                                                                                                                                                                                                                                                                                                                      
OriginalICal                              | Holds the original ICAL of an imported item                                                                                                                                                                                                                                                                                                                                                                    
OriginalMeetingType                       | Retains the original MeetingType in case the original meeting type is reset                                                                                                                                                                                                                                                                                                                                    
OriginalStoreEntryId                      | Maintains a copy of the store entry id if the original gets modified                                                                                                                                                                                                                                                                                                                                           
OwnerAppointmentID                        | This property is supposed to be a number that is unique to the sender's calendar. Outlook uses this number to correlate meeting messages with calendar items                                                                                                                                                                                                                                                   
OwnerCriticalChangeTime                   | DateTime tracking value for Owner Critical Change Time                                                                                                                                                                                                                                                                                                                                                         
NprAttachmentTrackingMetadataRaw          | Properties that need to be copied to the meeting request for NPR(Non Pattern Recurrence) An NPR series is a recurring series where all of the events have different start and end times (e.g. Mon 10-12, Thurs 11-11:30, Fri 3-4:45) but have other properties in common .NPR instances of the same series are single events tied together by the same SeriesMasterId, which is the Id of the NPR series master
ParkedCorrelationId                       | Holds correlation id of parked message                                                                                                                                                                                                                                                                                                                                                                         
ParkedMessagesFolderEntryId               | Holds the entry id of ParkedMessages folder                                                                                                                                                                                                                                                                                                                                                                    
Preview                                   | Preview of the Email                                                                                                                                                                                                                                                                                                                                                                                           
PropertyChangeMetadataProcessingFlags     | Flags representing property change metadata processing behavior                                                                                                                                                                                                                                                                                                                                                
PropertyChangeMetadataRaw                 | Blob representing property change metadata for Series exception management purposes                                                                                                                                                                                                                                                                                                                            
PublishedCalendarItemUrl                  | The url for a published calendar event (schedule)                                                                                                                                                                                                                                                                                                                                                              
PushReminders                             | Property that contains push reminders                                                                                                                                                                                                                                                                                                                                                                          
RawAttendeeInformation                    | Stores raw attendee information provided by a client, to help troubleshoot and debug attendee translation issues                                                                                                                                                                                                                                                                                               
RecipientType                             | Represents the recipient type of a recipient on the message                                                                                                                                                                                                                                                                                                                                                    
ReminderIsSetInternal                     | True or False                                                                                                                                                                                                                                                                                                                                                                                                  
ReminderMinutesBeforeStartInternal        | Reminder in minutes before the meeting starts                                                                                                                                                                                                                                                                                                                                                                  
ResponseType                              | Gets the type of response the attendee gave to the meeting invitation it received                                                                                                                                                                                                                                                                                                                              
Sensitivity                               | Defines the sensitivity of an item                                                                                                                                                                                                                                                                                                                                                                             
SentRepresentingDisplayName               | The displayname of the sent respresenting person                                                                                                                                                                                                                                                                                                                                                               
SentRepresentingEntryId                   | The entry id of the the sent respresenting person                                                                                                                                                                                                                                                                                                                                                              
SentRepresentingType                      | The address type of the sent representing person                                                                                                                                                                                                                                                                                                                                                               
SeriesMessageContainsPollResponse         | Boolean flag on meeting poll response messages indicating whether series message contains poll response blob or not                                                                                                                                                                                                                                                                                            
SeriesReminderIsSet                       | Flag indicating wheter reminder is set for the whole series                                                                                                                                                                                                                                                                                                                                                    
Size                                      | Size in Bytes of the Meeting Message                                                                                                                                                                                                                                                                                                                                                                           
SkypeTeamsMeetingUrl                      | The meeting url for Teams meeting                                                                                                                                                                                                                                                                                                                                                                              
SkypeTeamsProperties                      | The relevant properties for Teams meeting                                                                                                                                                                                                                                                                                                                                                                      
StartTimeZoneId                           | Time zone of the start of the meeting                                                                                                                                                                                                                                                                                                                                                                          
StartWallClock                            | The start time of the meeting expressed in the time zone of the meeting                                                                                                                                                                                                                                                                                                                                        
SuggestionCategory                        | Represents the suggestion category for the message                                                                                                                                                                                                                                                                                                                                                             
TransportMessageHeaders                   | Transport Message Header Information                                                                                                                                                                                                                                                                                                                                                                           
UCCapabilities                            | Represents the XML blob of OCS capabilities for the Lync online meeting                                                                                                                                                                                                                                                                                                                                        
UCInband                                  | Represents the XML blob of Inband data for the Lync online meeting                                                                                                                                                                                                                                                                                                                                             
UCMeetingSetting                          | Represents the XML blob of all information related to the Lync online meeting                                                                                                                                                                                                                                                                                                                                  
UCMeetingSettingSent                      | Represents the XML blob of all information related to the Lync online meeting                                                                                                                                                                                                                                                                                                                                  
UCOpenedConferenceID                      | Represents the guid associated with this online meeting                                                                                                                                                                                                                                                                                                                                                        
UnsendableRecipients                      | This property contains the recipient data for all unsendable recipients                                                                                                                                                                                                                                                                                                                                        
When                                      | The text returned by When is localized using the Exchange Server culture or using the culture specified in the PreferredCulture property of the ExchangeService object this appointment is bound to           

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-CalendarDiagnosticObjects -Identity "Pedro Pizarro" -Subject "Team Meeting" -ExactMatch $true
```

This example retrieves the calendar diagnostic logs from Pedro Pizarro's mailbox for all items where the Subject is an exact match for Team Meeting.

### Example 2
```powershell
$A = Get-CalendarDiagnosticObjects -Identity "Pedro Pizarro" -Subject "Team Meeting" -ExactMatch $true; $A | Select-Object *,@{n='OLMT'; e={[DateTime]::Parse($_.OriginalLastModifiedTime.ToString())}} | sort OLMT | Format-Table OriginalLastModifiedTime,CalendarLogTriggerAction,ItemClass,ClientInfoString
```

This is the same as the previous example, but now the results are sorted by original last modified time.

### Example 3
```powershell
Get-CalendarDiagnosticObjects -Identity "Pedro Pizarro" -MeetingID 40000008200E00074C5B7101A82E00800000000693ADAA3B5FCD201000000000000000010000000FF760A70460EAA4096B879872DF24F49
```

This example retrieves the calendar diagnostic logs for Pedro Pizarro's mailbox for a meeting with the specified unique global object ID (GOID).

### Example 4
```powershell
Get-CalendarDiagnosticObjects -Identity "Pedro Pizarro" -Subject "Team Lunch" -StartDate 7/1/2018 -EndDate 7/31/2018 | Export-Csv "C:\My Documents\Team Lunch Meeting.csv" -NoTypeInformation
```

This example returns diagnostic information for meetings with the subject Team Lunch in Pedro Pizarro's mailbox in the month of July, 2018, and exports the results to the file C:\\My Documents\\Team Lunch Meeting.csv.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox or Microsoft 365 Group whose calendar you want to view. You can use any value that uniquely identifies the mailbox or Microsoft 365 Group. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: UnifiedGroupOrUserMailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CustomPropertyNames
The CustomPropertyNames parameter returns the specified calendar item custom property in the results. You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EntryId
The EntryID parameter filters the results by the specified EntryID property value, which corresponds to the MAPI property PR\_ENTRYID.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExactMatch
The ExactMatch parameter specifies whether to use an exact match or a partial match for text values that you specify for the Subject parameter. Valid values are:

- $true: The subject search uses an exact match and searches all calendar items in the mailbox. For example, if you search for "budget", the search looks for items that have "budget" anywhere in the subject, but not "budgeting".

- $false: The subject search uses a partial match and searches a maximum of 1000 calendar items in the mailbox. For example, if you search for "budget", the search looks for items that have "budget" and "budgeting" anywhere in the subject. This is the default value.

A partial subject match search may not return all of the relevant calendar items. Try using an exact subject match search for more accurate results.

You only use this parameter with the Subject parameter.

The value of this parameter is ignored when you use the MeetingId parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemClass
The ItemClass parameter filters the results by the specified MessageClass property value of the calendar item (for example, IPM.Appointment). You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemIds
The ItemIds parameter filters the results by item ID. You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MeetingId
The MeetingId parameter filters the results by the globally unique identifier of the calendar item. The value is the CleanGlobalObjectId property of the calendar item that's available in the output of this cmdlet, or by using other MAPI examination tools. An example value is 040000008200E00074C5B7101A82E00800000000B0225ABF0710C80100000000000000001000000005B27C05AA7C4646B0835D5EB4E41C55. This value is constant throughout the lifetime of the calendar item.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
This parameter determines the number of results returned by the cmdlet. The maximum value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShouldBindToItem
The ShouldBindToItem parameter specifies whether to truncate large streamable property values (for example, AppointmentRecurrenceBlob). Valid values are:

- $true: The values of large streamable properties aren't truncated, so the full value is returned.

- $false: The values of large streamable properties are truncated. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShouldFetchRecurrenceExceptions
The ShouldFetchRecurrenceExceptions parameter specifies whether to include exceptions to recurring meetings. Valid values are:

- $true: Include exceptions to recurring meetings. When you use this value, you also need to use the ItemIds parameter.

- $false: Don't Include exceptions to recurring meetings. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Subject
The Subject parameter identifies the calendar items by the specified text in the Subject field. The text values that you specify aren't case sensitive. If the value contains spaces, enclose the value in quotation marks. You can control whether to use exact matching by using the ExactMatch parameter

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable and -ShouldFetchAttendeeCollection, and -EwsID, and -ConfigurationName. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
