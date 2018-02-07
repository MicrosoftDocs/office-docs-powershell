---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Set-MailboxRegionalConfiguration

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-MailboxRegionalConfiguration cmdlet to set regional settings such as time, date, or language for the specified mailbox.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-MailboxRegionalConfiguration cmdlet to modify the regional settings of a mailbox. You can modify the date format, time format, time zone, and language of the mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-MailboxRegionalConfiguration [-Identity] <MailboxIdParameter> [-Confirm] [-DateFormat <String>]
 [-DomainController <Fqdn>] [-Language <CultureInfo>] [-LocalizeDefaultFolderName] [-TimeFormat <String>]
 [-TimeZone <ExTimeZoneValue>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "User options" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Spelling configuration" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-MailboxRegionalConfiguration -Identity Tony -Language pt-br
```

This example sets Tony's mailbox to have the language set as Brazilian Portuguese.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-MailboxRegionalConfiguration -Identity "Marcelo Teixeira" -Language pt-br -LocalizeDefaultFolderName
```

This example sets Marcelo Teixeira's mailbox language to Brazilian Portuguese, and localizes the default folder names in Portuguese.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-MailboxRegionalConfiguration -Identity "Marcelo Teixeira" -Language pt-br -LocalizeDefaultFolderName
```

This example sets Marcelo Teixeira's mailbox language to Brazilian Portuguese, and localizes the default folder names in Portuguese.

### Example 1 -------------------------- (Exchange Online)
```
Set-MailboxRegionalConfiguration -Identity "Marcelo Teixeira" -Language pt-br -LocalizeDefaultFolderName
```

This example sets Marcelo Teixeira's mailbox language to Brazilian Portuguese, and localizes the default folder names in Portuguese.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-MailboxRegionalConfiguration -Identity Tony -DateFormat "d/m/yyyy"
```

This example sets the date format for Tony's mailbox.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-MailboxRegionalConfiguration -Identity "Ella Lack" -DateFormat "d/m/yyyy"
```

This example sets the date format for Ella Lack's mailbox.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-MailboxRegionalConfiguration -Identity "Ella Lack's" -DateFormat "d/m/yyyy"
```

This example sets the date format for Ella Lack's mailbox.

### Example 2 -------------------------- (Exchange Online)
```
Set-MailboxRegionalConfiguration -Identity "Ella Lack's" -DateFormat "d/m/yyyy"
```

This example sets the date format for Ella Lack's mailbox.

### Example 3 -------------------------- (Exchange Server 2010)
```
Set-MailboxRegionalConfiguration -Identity Tony -Language da-dk -DateFormat "dd-mm-yyyy"
```

This example sets Tony's mailbox to have the language set as Denmark and the date set in the format of day/month/year.

### Example 3 -------------------------- (Exchange Server 2013)
```
Set-MailboxRegionalConfiguration -Identity "Alice Jakobsen" -Language da-dk -DateFormat "dd-mm-yyyy" -LocalizeDefaultFolderName
```

This example sets Alice Jakobsen's mailbox language to Danish Denmark, sets the date in the day/month/year format, and localizes the default folder names in Danish.

### Example 3 -------------------------- (Exchange Server 2016)
```
Set-MailboxRegionalConfiguration -Identity "Alice Jakobsen" -Language da-dk -DateFormat "dd-mm-yyyy" -LocalizeDefaultFolderName
```

This example sets Alice Jakobsen's mailbox language to Danish Denmark, sets the date in the day/month/year format, and localizes the default folder names in Danish.

### Example 3 -------------------------- (Exchange Online)
```
Set-MailboxRegionalConfiguration -Identity "Alice Jakobsen" -Language da-dk -DateFormat "dd-mm-yyyy" -LocalizeDefaultFolderName
```

This example sets Alice Jakobsen's mailbox language to Danish Denmark, sets the date in the day/month/year format, and localizes the default folder names in Danish.

## PARAMETERS

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the mailbox. You can use the following values:

- GUID

- ADObjectID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox.

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

### -Confirm
!!! Exchange Server 2010, Exchange Server 2013

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-* and Set-* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



!!! Exchange Server 2016, Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



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

### -DateFormat
!!! Exchange Server 2010, Exchange Server 2013

The DateFormat parameter specifies the format for displaying the date, for example, m/d/yyyy, in the mailbox for a specified region based on the Language selection.



!!! Exchange Server 2016, Exchange Online

The DateFormat parameter specifies the date format based on the current or specified language for the mailbox. For example, if the language is set to en-US, valid DateFormat parameter values include:

- M/d/yyyy: This is the default value for en-US.

- M/d/yy

- MM/dd/yy

- MM/dd/yyyy

- yy/MM/dd

- yyyy-MM-dd

- dd-MMM-yy

For more information about the date format strings, see Standard Date and Time Format Strings (https://go.microsoft.com/fwlink/p/?LinkId=784852).



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

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language
!!! Exchange Server 2010, Exchange Server 2013

The Language parameter specifies the language setting such as en-us that would apply for the mailbox.



!!! Exchange Server 2016, Exchange Online

The Language parameter specifies the language for the mailbox.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see CultureInfo Class (https://go.microsoft.com/fwlink/p/?linkId=184859).



```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalizeDefaultFolderName
!!! Exchange Server 2010

The LocalizeDefaultFolderName parameter specifies whether the default folder names of the mailbox are localized with the current or specified language. When the parameter is set to $true, the default folder names of the mailbox are localized with the current or specified language. This parameter can only be used by the mailbox owner running the task. If a non-mailbox owner tries to configure this setting on the mailbox, an error is reported. By default, the value is set to $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The LocalizeDefaultFolderName switch localizes the default folder names of the mailbox in the current or specified language. You don't need to specify a value with this switch.



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

### -TimeFormat
!!! Exchange Server 2010, Exchange Server 2013

The TimeFormat parameter specifies the format (for example, h:mm tt, as in 3:45 A.M.) used by the mailbox to display time for the specified region.



!!! Exchange Server 2016, Exchange Online

The TimeFormat parameter specifies the time format based on the current or specified language value for the mailbox. For example, if the language is set to en-us, valid TimeFormat parameter values include:

- h:mm tt: This is the default value for en-US.

- hh:mm tt

- H:mm

- HH:mm

For more information about the time format strings, see Standard Date and Time Format Strings (https://go.microsoft.com/fwlink/p/?LinkId=784852).



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

### -TimeZone
!!! Exchange Server 2010, Exchange Server 2013

The TimeZone parameter specifies the time zone, such as Pacific Standard Time, that the mailbox in the specified region uses. The default value is the time zone setting on the server.



!!! Exchange Server 2016, Exchange Online

The TimeZone parameter specifies the time zone for the mailbox.

A valid value for this parameter is a supported time zone key name (for example, "Pacific Standard Time").

To see the available values, run the following command: $TimeZone = Get-ChildItem "HKLM:\\Software\\Microsoft\\Windows NT\\CurrentVersion\\Time zones" | foreach {Get-ItemProperty $\_.PSPath}; $TimeZone | sort Display | Format-Table -Auto PSChildname,Display

If the value contains spaces, enclose the value in quotation marks ("). The default value is the time zone setting of the Exchange server.



```yaml
Type: ExTimeZoneValue
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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

[Online Version](https://technet.microsoft.com/library/bf47b2e4-2aba-4df5-a444-5b187328482d.aspx)

