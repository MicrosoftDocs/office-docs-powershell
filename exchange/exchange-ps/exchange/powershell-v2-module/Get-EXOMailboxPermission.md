---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
applicable: Exchange Online
title: Get-EXOMailboxPermission
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-EXOMailboxPermission

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

Use the Get-EXOMailboxPermission cmdlet to retrieve permissions on a mailbox.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

### Default (Default)
```
Get-EXOMailboxPermission [-ResultSize <Unlimited>] [<CommonParameters>]
```

### Identity
```
Get-EXOMailboxPermission
 [-ExternalDirectoryObjectId <Guid>]
 [-Identity <String>]
 [-Owner]
 [-ResultSize <Unlimited>]
 [-SoftDeletedMailbox]
 [-User <String>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
{{ Fill in the Description }}

## EXAMPLES

### Example 1
```
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -ExternalDirectoryObjectId
{{ Fill ExternalDirectoryObjectId Description }}

```yaml
Type: Guid
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox you want to view. You can use any value that uniquely identifies the mailbox. For example:

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
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Owner
The Owner switch returns the owner information for the mailbox that's specified by the Identity parameter. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

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

### -SoftDeletedMailbox
{{ Fill SoftDeletedMailbox Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter returns information about the user who has permissions to the mailbox specified by the Identity parameter.

The user that you specify for this parameter must be a user or security group (a security principal that can have permissions assigned). You can use any value that uniquely identifies the user. For example: For example:

- Name

- Distinguished name (DN)

- Canonical DN

- GUID

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online
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
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online
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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exomailboxpermission)
