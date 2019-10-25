---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
applicable: Exchange Online
title: Get-EXOMailboxFolderPermission
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-EXOMailboxFolderPermission

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

Use the Get-ExOMailboxFolderPermission cmdlet to view folder-level permissions in mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Get-EXOMailboxFolderPermission
 [-User <String>]
 [-GroupMailbox]
 [[-Identity] <String>]
 [-ExternalDirectoryObjectId <Guid>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
{{ Fill in the Description }}

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -ExternalDirectoryObjectId
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -GroupMailbox
The GroupMailbox switch is required to return Office 365 groups in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox folder that you want to view. This parameter uses the syntax: \<Mailbox\>:\\\<Folder\>. For the value of \<Mailbox\>, you can use any value that uniquely identifies the mailbox. For example:

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

Example values for this parameter are john@contoso.com:\\Calendar or John:\\Marketing\\Reports.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -User
The User parameter filters the results by the specified mailbox, mail user, or mail-enabled security group (security principal) that's granted permission to the mailbox folder. You can use any value that uniquely identifies the user or group. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

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

### -UserPrincipalName
{{ Fill UserPrincipalName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exomailboxfolderpermission)
