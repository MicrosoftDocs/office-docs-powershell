---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/import-contactlist
applicable: Exchange Online
title: Import-ContactList
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Import-ContactList

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Import-ContactList cmdlet and a .csv file to import a user's mail contacts to a cloud-based mailbox. Users can use an email client to export their contacts to a .csv file that is formatted for Microsoft Office Outlook.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Data
```
Import-ContactList [-Identity] <MailboxIdParameter> [-CSV] -CSVData <Byte[]>
 [-DateCultureName] <String>
 [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

### Stream
```
Import-ContactList [-Identity] <MailboxIdParameter> [-CSV] -CSVStream <Stream>
 [-DateCultureName] <String>
 [-Confirm]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Import-ContactList cmdlet submits a request to import a list of mail contacts that are contained in a .csv file to a cloud-based mailbox. Many MAPI and Web-based email clients allow users to export contacts to a Microsoft Office Outlook .csv format. Users can then provide that .csv file to you to import contacts to their cloud-based mailbox. During the import process, Microsoft Exchange matches the column names in the header row of the .csv file to the property names of an Exchange contact.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Import-ContactList -CSV -CSVData ([System.IO.File]::ReadAllBytes("D:\Users\Administrator\Desktop\TerryAdams.csv")) -DateCultureName "en-GB" -Identity terrya@contoso.edu
```

This example imports a list of contacts in a .csv file named TerryAdams.csv to a mailbox for a user whose email address is terrya@contoso.edu. The date fields are parsed using the date format of "en-GB" locale (dd/MM/YYYY).

## PARAMETERS

### -CSV
The CSV parameter simply specifies that the contacts will be imported from a .csv file.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CSVData
The CSVData parameter specifies the .csv file you want to import. Use the following syntax for this parameter: `([System.IO.File]::ReadAllBytes("<file name and path>"))`. For example, `([System.IO.File]::ReadAllBytes("C:\My Documents\Contacts.csv"))`.

```yaml
Type: Byte[]
Parameter Sets: Data
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CSVStream
This parameter is reserved for internal Microsoft use.

```yaml
Type: Stream
Parameter Sets: Stream
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DateCultureName
The DateCultureName parameter specifies the culture to use for parsing date fields (e.g. Birthday and Anniversary). For example, setting the parameter to "en-GB" would lead to 01/02/2018 being parsed as February 1st, 2018, whereas setting it to "en-US" would lead to the same date being parsed as January 2nd, 2018. If the parameter is not provided, the culture of the current user is assumed.

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

### -Identity
The Identity parameter specifies the target mailbox to which the contacts are imported. You can use any value that uniquely identifies the mailbox. For example:

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
