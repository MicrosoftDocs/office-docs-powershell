---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-CalendarDiagnosticAnalysis
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Get-CalendarDiagnosticAnalysis

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-CalendarDiagnosticAnalysis cmdlet to troubleshoot calendar-related reliability issues. You can use this cmdlet to analyze calendar item data that's recorded in the Calendar Diagnostic logs. You provide the calendar item data to this cmdlet by using the Get-CalendarDiagnosticLog cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-CalendarDiagnosticAnalysis -CalendarLogs <CalendarLog[]> [-DetailLevel <Basic | Advanced>]
 [-GlobalObjectId <String>] [-OutputAs <HTML | CSV | XML>] [<CommonParameters>]
```

### Set2
```
Get-CalendarDiagnosticAnalysis -LogLocation <String[]> [-DetailLevel <Basic | Advanced>]
 [-GlobalObjectId <String>] [-OutputAs <HTML | CSV | XML>] [<CommonParameters>]
```

## DESCRIPTION
The following properties of the calendar item are returned in the default output of the cmdlet (when the DetailLevel parameter is set to Basic):

- Local Log Time

- ItemId

- NormalizedSubject

- StartTime

- EndTime

- CalendarLogTriggerAction

- ClientInfoString

- OriginalLastModifiedTime

- ClientIntent

- CleanGlobalObjectId

- ItemClass

- ParentDisplay

- Duration

- AppointmentRecurring

- SentRepresentingEmailAddress

- SenderEmailAddress

- SentRepresentingDisplayName

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$logs = Get-CalendarDiagnosticLog -Identity oevans -MeetingID 040000008200E00074C5B7101A82E008000000009421DCCD5046CD0100000000000000001000000010B0349F6B17454685E17D9F9512E71F; Get-CalendarDiagnosticAnalysis -CalendarLogs $logs -DetailLevel Advanced> "C:\My Documents\Oscar Evans Analysis.csv"
```

This example gets the specified calendar item from Oscar Evans' mailbox, stores the item as a variable and writes the advanced analysis of the item to a CSV file.

For basic analysis of the item, don't include the DetailLevel parameter, or use the value Basic instead of Advanced.

### -------------------------- Example 2 --------------------------
```
Get-CalendarDiagnosticAnalysis -LogLocation "C:\My Documents\Exported Calendar Logs\jkozma@contoso.com" -DetailLevel Advanced -OutputAs HTML > "C:\My Documents\Jasen Kozma Analysis.html"
```

This example analyzes the calendar items that were exported from Jasen Kozma's mailbox by using the Get-CalendarDiagnosticLog cmdlet with the LogLocation parameter and writes the advanced analysis of the items to an HTML file.

For basic analysis of the items, don't include the DetailLevel parameter, or use the value Basic instead of Advanced.

## PARAMETERS

### -CalendarLogs
The CalendarLogs parameter specifies the calendar item that you want to analyze. You identify the calendar item by storing the output of the Get-CalendarDiagnosticLog cmdlet to a variable and using that variable for the value of this parameter.

For example, to analyze the meeting with the subject "November Budget Meeting" in Shannon Steele's mailbox, run the command $Budget = Get-CalendarDiagnosticLog -Identity "Shannon Steele" -Subject "November Budget Meeting" -ExactMatch and then use the value $Budget for this parameter.

Note that you can't use this parameter to analyze multiple calendar items. The value that you use for this parameter must identify a single item.

You can't use this parameter with the LogLocation parameter.

```yaml
Type: CalendarLog[]
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogLocation
The LogLocation parameter specifies the location of the exported calendar items that you want to analyze. You can specify a local path, or a UNC path (\\\\\<Server\>\\\<Share\>\\\<User\>). If the value contains spaces, enclose the value in quotation marks (").

You export the calender items to .msg files by using the Get-CalendarDiagnosticLog cmdlet with the LogLocation parameter. If the path contains multiple .msg files, all of those files are analyzed when you run Get-CalendarDiagnosticAnalysis.

You can't use this parameter with the CalendarLogs parameter.

```yaml
Type: String[]
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DetailLevel
The DetailLevel parameter specifies the level of detail you want to see in the analysis output. Valid values are:

- Basic: This is the default value. The calendar item properties that are returned are listed in the Detailed Description.

- Advanced: 37 additional calendar item properties are returned. You should use this value only for detailed debugging information.

```yaml
Type: Basic | Advanced
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalObjectId
The GlobalObjectId parameter specifies the identity of the calendar item you want to analyze. You can use this parameter with the LogLocation parameter to specify the calendar item if the location contains multiple exported .msg files.

The GlobalObjectId property of the meeting uses the same format as the CleanGlobalObjectId property (for example, 040000008200E00074C5B7101A82E008000000009421DCCD5046CD0100000000000000001000000010B0349F6B17454685E17D9F9512E71F) and the value of the two properties is likely the same. However, the value of GlobalObjectId might not stay the same for all instances of the same meeting in multiple calendars (for example, different attendees invited to different instances of the same recurring meeting).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputAs
The OutputAs parameter specifies the output format of the command. Valid values are:

- CSV (This is the default value)

- HTML

- XML

```yaml
Type: HTML | CSV | XML
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/1ccb3442-1101-45c5-8508-599af6e56076.aspx)
