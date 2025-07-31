---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-exomailboxfolderpermission
schema: 2.0.0
title: Get-EXOMailboxFolderPermission
---

# Get-EXOMailboxFolderPermission

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-ExOMailboxFolderPermission cmdlet to view folder-level permissions in mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-EXOMailboxFolderPermission [[-Identity] <String>]
 [-ExternalDirectoryObjectId <Guid>]
 [-GroupMailbox]
 [-PrimarySmtpAddress <String>]
 [-User <String>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to retrieve folder level permission in the mailbox.

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

> Applicable: Exchange Online

The Identity parameter specifies the mailbox folder that you want to view. This parameter uses the syntax: `<Mailbox>:\<Folder>`. For the best performance, we recommend using the user ID or user principal name (UPN) to identify the mailbox.

Otherwise, you can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Email address
- LegacyExchangeDN
- SamAccountName

You can't use this parameter with the ExternalDirectoryObjectId, PrimarySmtpAddress, or UserPrincipalName parameters.

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

### -ExternalDirectoryObjectId

> Applicable: Exchange Online

The ExternalDirectoryObjectId parameter identifies the mailbox that you want to view by the ObjectId in Microsoft Entra ID.

You can't use this parameter with the Identity, PrimarySmtpAddress, or UserPrincipalName parameters.

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

> Applicable: Exchange Online

The GroupMailbox switch is required to return Microsoft 365 Groups in the results. You don't need to specify a value with this switch.

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

### -PrimarySmtpAddress

> Applicable: Exchange Online

The PrimarySmtpAddress identifies the mailbox that you want to view by primary SMTP email address (for example, navin@contoso.com).

You can't use this parameter with the ExternalDirectoryObjectId, Identity, or UserPrincipalName parameters.

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

### -User

> Applicable: Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName

> Applicable: Exchange Online

The UserPrincipalName parameter identifies the mailbox that you want to view by UPN (for example, navin@contoso.onmicrosoft.com).

You can't use this parameter with the ExternalDirectoryObjectId, Identity, or PrimarySmtpAddress parameters.

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

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-MailboxFolderPermission](https://learn.microsoft.com/powershell/module/exchange/get-mailboxfolderpermission)

[Set-MailboxFolderPermission](https://learn.microsoft.com/powershell/module/exchange/set-mailboxfolderpermission)

[Remove-MailboxFolderPermission](https://learn.microsoft.com/powershell/module/exchange/remove-mailboxfolderpermission)

[Add-MailboxFolderPermission](https://learn.microsoft.com/powershell/module/exchange/add-mailboxfolderpermission)
