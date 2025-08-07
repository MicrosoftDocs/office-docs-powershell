---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-calendardiagnosticanalysis
schema: 2.0.0
title: Get-CalendarDiagnosticAnalysis
---

# Get-CalendarDiagnosticAnalysis

## SYNOPSIS
Although this cmdlet is available in on-premises Exchange and in the cloud-based service, it only works in on-premises Exchange.

Use the Get-CalendarDiagnosticAnalysis cmdlet to troubleshoot calendar-related reliability issues. You can use this cmdlet to analyze calendar item data that's recorded in the Calendar Diagnostic logs. You provide the calendar item data to this cmdlet by using the Get-CalendarDiagnosticLog cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### DefaultSet
```
Get-CalendarDiagnosticAnalysis -CalendarLogs <CalendarLog[]>
 [-DetailLevel <AnalysisDetailLevel>]
 [-GlobalObjectId <String>]
 [-OutputAs <OutputType>]
 [<CommonParameters>]
```

### LocationSet
```
Get-CalendarDiagnosticAnalysis -LogLocation <String[]>
 [-DetailLevel <AnalysisDetailLevel>]
 [-GlobalObjectId <String>]
 [-OutputAs <OutputType>]
 [<CommonParameters>]
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

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
$logs = Get-CalendarDiagnosticLog -Identity oevans -MeetingID 040000008200E00074C5B7101A82E008000000009421DCCD5046CD0100000000000000001000000010B0349F6B17454685E17D9F9512E71F

Get-CalendarDiagnosticAnalysis -CalendarLogs $logs -DetailLevel Advanced | Set-Content -Path "C:\My Documents\Oscar Evans Analysis.csv"
```

This example gets the specified calendar item from Oscar Evans' mailbox, stores the item as a variable and writes the advanced analysis of the item to a CSV file.

For basic analysis of the item, don't include the DetailLevel parameter, or use the value Basic instead of Advanced.

### Example 2
```powershell
Get-CalendarDiagnosticAnalysis -LogLocation "C:\My Documents\Exported Calendar Logs\jkozma@contoso.com" -DetailLevel Advanced -OutputAs HTML | Set-Content -Path "C:\My Documents\Jasen Kozma Analysis.html"
```

In **Exchange 2013**, this example analyzes the calendar items that were previously exported from Jasen Kozma's mailbox by using the Get-CalendarDiagnosticLog cmdlet with the LogLocation parameter and writes the advanced analysis of the items to an HTML file.

**Note**: The LogLocation parameter is available only in Exchange 2013. To specify the location of exported calendar items in Exchange 2016 or Exchange 2019, see Example 3.

For basic analysis of the items, don't include the DetailLevel parameter, or use the value Basic instead of Advanced.

### Example 3
```powershell
$calitems = Get-CalendarDiagnosticLog -Identity jkozma@contoso.com -Subject "Budget Meeting"

ForEach($item in $calitems){$i++; Get-CalendarDiagnosticAnalysis -CalendarLogs $item -OutputAs HTML | Set-Content -Path ("\\FileServer01\Data\Jasen Kozma Analysis{0}.html" -f $i)}
```

This example analyzes the calendar items that were exported from Jasen Kozma's mailbox by using the Get-CalendarDiagnosticLog cmdlet and writes the advanced analysis for each item to an HTML file by using an UNC path.

For basic analysis of the items, don't include the DetailLevel parameter, or use the value Basic instead of Advanced.

## PARAMETERS

### -CalendarLogs

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The CalendarLogs parameter specifies the calendar item that you want to analyze. You identify the calendar item by storing the output of the Get-CalendarDiagnosticLog cmdlet to a variable and using that variable for the value of this parameter.

For example, to analyze the meeting with the subject "November Budget Meeting" in Shannon Steele's mailbox, run the command `$Budget = Get-CalendarDiagnosticLog -Identity "Shannon Steele" -Subject "November Budget Meeting" -ExactMatch` and then use the value `$Budget` for this parameter.

The value that you use for this parameter must identify a single item. To identify multiple items, see Example 3.

You can't use this parameter with the LogLocation parameter.

```yaml
Type: CalendarLog[]
Parameter Sets: DefaultSet
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogLocation

> Applicable: Exchange Server 2013, Exchange Online

**Note**: This parameter was removed from Exchange 2016 and Exchange 2019 by the [2022 H1 Cumulative Updates](https://techcommunity.microsoft.com/t5/exchange-team-blog/released-2022-h1-cumulative-updates-for-exchange-server/ba-p/3285026) because it accepts UNC path values. To specify the calendar items to analyze, use the CalendarLogs parameter.

This parameter is functional only in Exchange 2013.

The LogLocation parameter specifies the location of the exported calendar items that you want to analyze. You can specify a local path, or a UNC path (`\\Server\Share\User`). If the value contains spaces, enclose the value in quotation marks (").

You export the calendar items to .msg files by using the Get-CalendarDiagnosticLog cmdlet with the LogLocation parameter. If the path contains multiple .msg files, all of those files are analyzed when you run Get-CalendarDiagnosticAnalysis.

You can't use this parameter with the CalendarLogs parameter.

```yaml
Type: String[]
Parameter Sets: LocationSet
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DetailLevel

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DetailLevel parameter specifies the level of detail you want to see in the analysis output. Valid values are:

- Basic: This value is the default. The calendar item properties that are returned are listed in the Detailed Description.
- Advanced: 37 additional calendar item properties are returned. You should use this value only for detailed debugging information.

```yaml
Type: AnalysisDetailLevel
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalObjectId

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The GlobalObjectId parameter specifies the identity of the calendar item you want to analyze. In Exchange 2013, you can use this parameter with the LogLocation parameter to specify the calendar item if the location contains multiple exported .msg files.

The GlobalObjectId property of the meeting uses the same format as the CleanGlobalObjectId property (for example, 040000008200E00074C5B7101A82E008000000009421DCCD5046CD0100000000000000001000000010B0349F6B17454685E17D9F9512E71F) and the value of the two properties is likely the same. However, the value of GlobalObjectId might not stay the same for all instances of the same meeting in multiple calendars (for example, different attendees invited to different instances of the same recurring meeting).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputAs

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The OutputAs parameter specifies the output format of the command. Valid values are:

- CSV (default value)
- HTML
- XML

```yaml
Type: OutputType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
