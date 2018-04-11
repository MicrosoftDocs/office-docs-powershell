---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-CalendarDiagnosticLog
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Get-CalendarDiagnosticLog

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-CalendarDiagnosticLog cmdlet to collect a range of calendar logs. The Calendar Diagnostic logs track all calendar items and meeting requests in mailboxes. You can use this information to troubleshoot calendar issues that occur in mailboxes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-CalendarDiagnosticLog [-Identity] <MailboxIdParameter> -MeetingID <String> [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-LogLocation <String>] [-ReadFromDomainController] [-ResultSize <Unlimited>]
 [-EndDate <ExDateTime>] [-Latest] [-StartDate <ExDateTime>] [-Subject <String>] [-EntryId <String>]
 [-ExactMatch <$true | $false>] [-ItemClass <String[]>] [-ItemIds <String[]>] [<CommonParameters>]
```

### Set1
```
Get-CalendarDiagnosticLog [-Identity] <MailboxIdParameter> -Subject <String> [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-LogLocation <String>] [-ReadFromDomainController] [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
The output of this cmdlet contains the following information:

- IsFileLink: Indicates whether the calendar item has been exported to a .msg file by using the LogLocation parameter. Values are True or False.

- Identity: Identifies the mailbox that holds the calendar item. An example value is: excallog://laura@contoso.com/?id=RgAAAACF/h/dHTTkQbdPrk7z+G4SBwCoatc7EmnEQq1iF35p17stAAAAAAFEAACoatc7EmnEQq1iF35p17stAAAAABEIAAAP.

- LogDate: The date-time that the calendar item was logged.

- NormalizedSubject: The Subject field of the calendar item.

- CleanGlobalObjectId: The identifier that's constant throughout the lifetime of the calendar item. For example, 040000008200E00074C5B7101A82E00800000000B0225ABF0710C80100000000000000001000000005B27C05AA7C4646B0835D5EB4E41C55.

After you run the Get-CalendarDiagnosticLog cmdlet, you can analyze the calendar data using the Get-CalendarDiagnosticAnalysis cmdlet. For more information, see Get-CalendarDiagnosticAnalysis.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CalendarDiagnosticLog -Identity "Shannon Steele" -Subject "Weekly development meeting" -ExactMatch $true
```

This example retrieves the Calendar Diagnostic log entries for Shannon Steele's mailbox by using the subject Weekly development meeting.

### -------------------------- Example 2 --------------------------
```
Get-CalendarDiagnosticLog -Identity oevans -StartDate "6/1/2015 6:00:00 AM" -EndDate "6/30/2015 5:00:00 PM"
```

This example retrieves the Calendar Diagnostic log entries for Oscar Evans' mailbox from 6/1/2015 to 6/30/2015.

### -------------------------- Example 3 --------------------------
```
Get-CalendarDiagnosticLog -Identity jkozma@contoso.com -Subject "Weekly development meeting" -Latest
```

This example retrieves the Calendar Diagnostic log data only for the most recent calendar item in Jasen Kozma's mailbox with a message subject of "Weekly development meeting".

### -------------------------- Example 4 --------------------------
```
Get-CalendarDiagnosticLog -Identity "Jasen Kozma" -Subject "Budget Meeting" -ExactMatch $true -LogLocation "C:\My Documents\Calendar Diagnostic Export"
```

This example exports all calendar items in the Calendar Diagnostic log for Jasen Kozma's mailbox that have "Budget Meeting" anywhere in the subject to the specified folder.

Notes:

In this example, the message files are written to C:\\My Documents\\Calendar Diagnostic Export\\jkozma@contoso.com.

In on-premises Exchange organizations, you can use the Get-CalendarDiagnosticAnalysis cmdlet with the LogLocation parameter to analyze the exported .msg files.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that contains the calendar items. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

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
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MeetingID
The MeetingID parameter filters the results by the globally unique identifier of the calendar item. The value is the CleanGloablObjectId property of the calendar item that's available in the output of this cmdlet, or by using other MAPI examination tools. An example value is 040000008200E00074C5B7101A82E00800000000B0225ABF0710C80100000000000000001000000005B27C05AA7C4646B0835D5EB4E41C55. This value is constant throughout the lifetime of the calendar item.

To find this value, it's easiest to first search for the calendar item by using the Subject, StartDate and EndDate parameters. After you find the calendar item that you want, you can use its CleanGloablObjectId value for the MeetingID parameter in future commands.

Don't use this parameter with the Subject parameter, because the value of the MeetingID parameter takes precedence.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Subject
The Subject parameter identifies the calendar items by the specified text in the Subject field. The text values that you specify aren't case sensitive. If the value contains spaces, enclose the value in quotation marks ("). You can control whether to use exact matching by using the ExactMatch parameter.

Don't use this parameter with the MeetingID parameter, because the value of the MeetingID parameter takes precedence.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
This parameter is available only in on-premises Exchange.

The Credential parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogLocation
The LogLocation parameter specifies the location to export the calendar items to .msg files. You can specify a local path, or a UNC path (\\\\\<Server\>\\\<Share\>). If the value contains spaces, enclose the value in quotation marks (").

In the location you specify, a subfolder is automatically created for the specified mailbox that holds the exported calendar items. For example, if you specify the value "C:\\My Documents\\Calendar Export" to export calendar items from the mailbox of Shannon Steele, the .msg files are actually stored in C:\\My Documents\\Calendar Export\\ssteele@contoso.com.

In on-premises Exchange organizations, you can use the Get-CalendarDiagnosticAnalysis cmdlet with the LogLocation parameter to analyze the exported .msg files.

Note: Commands that use this parameter might fail if the calendar item doesn't have a title. If you receive errors when you use this parameter, run the command again and replace this parameter with redirection to a file (\> "C:\\My Documents\\Calendar Export") or substitute the output to a PowerShell variable.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController
This parameter is available only in on-premises Exchange.

The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. If you run the command Set-AdServerSettings -ViewEntireForest $true to include all objects in the forest and you don't use the ReadFromDomainController switch, it's possible that information will be read from a global catalog that has outdated information. When you use the ReadFromDomainController switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch.

By default, the recipient scope is set to the domain that hosts your Exchange servers.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
This parameter is reserved for internal Microsoft use. A maximum of 1000 results are returned by this cmdlet.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Latest
The Latest switch specifies whether to return calendar log data for only the most recent calendar item. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EntryId
The EntryId parameter filters the results by entry ID. You can specify multiple values separated by commas.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2016, Exchange Online
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
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemClass
The ItemClass parameter filters the results by the specified MessageClass property value of the calendar item (for example, IPM.Appointment). You can specify multiple values separated by commas.

You can only use this parameter with the MeetingID parameter.

```yaml
Type: String[]
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2016, Exchange Online
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
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2016, Exchange Online
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/25b0fe23-6b15-4e02-b451-ea90442d54ed.aspx)
