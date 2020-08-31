---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/get-exomailboxfolderpermission
applicable: Exchange Online
title: Get-EXOMailboxFolderPermission
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: navgupta
monikerRange: "exchonline-ps"
---

# Get-EXOMailboxFolderPermission

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

Use the Get-ExOMailboxFolderPermission cmdlet to view folder-level permissions in mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-EXOMailboxFolderPermission [[-Identity] <String>]
 [-User <String>]
 [-GroupMailbox]
 [-ExternalDirectoryObjectId <Guid>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to retrieve folder level permission in the mailbox. 
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you.

## EXAMPLES

### Example 1
```powershell
Get-EXOMailboxFolderPermission -Identity john@contoso.com:\Marketing\Reports
```

This example returns the current list of user permissions for the Reports subfolder in the Marketing folder in John's mailbox.

### Example 2
```powershell
Get-EXOMailboxFolderPermission -Identity john@contoso.com:\Marketing\Reports -User Kim@contoso.com
```

This example returns the permissions for the same folder in John's mailbox, but only for the user Kim.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox folder that you want to view. This parameter uses the syntax: `<Mailbox>:\<Folder>`. For the best performance, we recommend using the user ID or user principal name (UPN) to identify the mailbox.

Otherwise, you can use any value that uniquely identifies the mailbox. For example:

- Name

- Alias

- Distinguished name (DN)

- Email address

- LegacyExchangeDN

- SamAccountName

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ExternalDirectoryObjectId
The ExternalDirectoryObjectId parameter identifies the mailbox you want to view by using the ObjectId of the mailbox in Azure Active Directory. You can use this value instead of the Identity parameter.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -GroupMailbox
The GroupMailbox switch is required to return Microsoft 365 Groups in the results. You don't need to specify a value with this switch.

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

### -User
The User parameter filters the results by the specified mailbox, mail user, or mail-enabled security group (security principal) that's granted permission to the mailbox folder. You can use any value that uniquely identifies the user or group. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

**Note**: If you specify a user that doesn't have permission to access the mailbox folder, the command will throw an exception.

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

### -UserPrincipalName
The UserPrincipalName parameter specifies the UPN for the mailbox you want to view (for example, navin.contoso.com).

```yaml
Type: String
Parameter Sets: (All)
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
