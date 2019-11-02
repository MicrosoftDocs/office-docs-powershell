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
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://review.docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2?branch=ExORestModule-chrisda).

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
Use this cmdlet to retreive folder level permission in the mailbox. 
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxFolderPermission -Identity john@contoso.com:\Marketing\Reports
```

This example returns the current list of user permissions for the Reports subfolder in the Marketing folder in John's mailbox.

### -------------------------- Example 2 --------------------------
```
Get-MailboxFolderPermission -Identity john@contoso.com:\Marketing\Reports -User Kim@contoso.com
```

This example returns the permissions for the same folder in John's mailbox, but only for the user Kim.


## PARAMETERS

### -ExternalDirectoryObjectId
The object ID for the Azure Active Directory account as the external directory object id of the mailbox.

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

- <UPN>:<\FolderPath> 

- <ExternalDirectoryObjectId>:<\FolderPath>

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
It is the name of a user in email address format for e.g. john.doe@contoso.com

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
