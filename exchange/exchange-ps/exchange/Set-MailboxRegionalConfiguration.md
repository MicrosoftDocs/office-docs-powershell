---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-mailboxregionalconfiguration
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-MailboxRegionalConfiguration
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-MailboxRegionalConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-MailboxRegionalConfiguration cmdlet to modify the regional settings of a mailbox. You can modify the date format, time format, time zone and language of the mailbox.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-MailboxRegionalConfiguration [-Identity] <MailboxIdParameter>
 [-Confirm] [-DateFormat <String>]
 [-DomainController <Fqdn>]
 [-Language <CultureInfo>]
 [-LocalizeDefaultFolderName]
 [-TimeFormat <String>]
 [-TimeZone <ExTimeZoneValue>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
As shown in Example 5, you might need to set the DateFormat and TimeFormat parameter values to $null when you change the Language parameter value and you recieve an error about invalid DateFormat values.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-MailboxRegionalConfiguration -Identity "Marcelo Teixeira" -Language pt-br -LocalizeDefaultFolderName
```

This example sets Marcelo Teixeira's mailbox language to Brazilian Portuguese, and localizes the default folder names in Portuguese.

### Example 2
```powershell
Set-MailboxRegionalConfiguration -Identity "Ella Lack's" -DateFormat "d/m/yyyy"
```

This example sets the date format for Ella Lack's mailbox.

### Example 3
```powershell
Set-MailboxRegionalConfiguration -Identity "Alice Jakobsen" -Language da-dk -DateFormat "dd-mm-yyyy" -LocalizeDefaultFolderName
```

This example sets Alice Jakobsen's mailbox language to Danish Denmark, sets the date in the day/month/year format and localizes the default folder names in Danish.


### Example 4
```powershell
Get-Mailbox -RecipientTypeDetails UserMailbox -ResultSize Unlimited | Set-MailboxRegionalConfiguration -Language es-es -DateFormat "dd/MM/yyyy" -TimeFormat H:mm -LocalizeDefaultFolderName
```

This example sets all User Mailboxes language to Spanish Spain, sets the date in the day/month/year format, sets the time in the H:mm format and localizes the default forder names in Spanish.

### Example 5
```powershell
Set-MailboxRegionalConfiguration -Identity "Megan Bowen" -Language es-ar -DateFormat $null -TimeFormat $null -LocalizeDefaultFolderName
```

This example sets Megan Bowen mailbox language to Spanish Argentina, sets the date and time format to default value for es-ar, and localizes the default folder names in Spanish.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. For example:

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
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DateFormat
The DateFormat parameter specifies a valid date format based on the current or specified language for the mailbox. For example, if the language is set to en-US, valid DateFormat parameter values include:

- M/d/yyyy: This is the default value for en-US.

- M/d/yy

- MM/dd/yy

- MM/dd/yyyy

- yy/MM/dd

- yyyy-MM-dd

- dd-MMM-yy

For more information about the date format strings, see [Standard Date and Time Format Strings](https://docs.microsoft.com/dotnet/standard/base-types/standard-date-and-time-format-strings).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language
The Language parameter specifies the language for the mailbox.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://docs.microsoft.com/dotnet/api/system.globalization.cultureinfo).

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalizeDefaultFolderName
The LocalizeDefaultFolderName switch localizes the default folder names of the mailbox in the current or specified language. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeFormat
The TimeFormat parameter specifies a valid time format based on the current or specified language value for the mailbox. For example, if the language is set to en-us, valid TimeFormat parameter values include:

- h:mm tt: This is the default value for en-US.

- hh:mm tt

- H:mm

- HH:mm

For more information about the time format strings, see [Standard Date and Time Format Strings](https://docs.microsoft.com/dotnet/standard/base-types/standard-date-and-time-format-strings).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeZone
The TimeZone parameter specifies the time zone for the mailbox.

A valid value for this parameter is a supported time zone key name (for example, "Pacific Standard Time").

To see the available values, run the following command: `$TimeZone = Get-ChildItem "HKLM:\Software\Microsoft\Windows NT\CurrentVersion\Time zones" | foreach {Get-ItemProperty $_.PSPath}; $TimeZone | sort Display | Format-Table -Auto PSChildname,Display`.

If the value contains spaces, enclose the value in quotation marks ("). The default value is the time zone setting of the Exchange server.

```yaml
Type: ExTimeZoneValue
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
