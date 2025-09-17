---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-exorecipientpermission
schema: 2.0.0
title: Get-EXORecipientPermission
---

# Get-EXORecipientPermission

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-EXORecipientPermission cmdlet to view information about SendAs permissions that are configured for users in a cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default (Default)
```
Get-EXORecipientPermission
 [-AccessRights <MultiValuedProperty>]
 [-ResultSize <Unlimited>]
 [-Trustee <String>]
 [<CommonParameters>]
```

### Identity
```
Get-EXORecipientPermission [[-Identity] <String>]
 [-AccessRights <MultiValuedProperty>]
 [-ExternalDirectoryObjectId <Guid>]
 [-PrimarySmtpAddress <String>]
 [-ResultSize <Unlimited>]
 [-Trustee <String>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to view/manage information about SendAs permissions that are configured for users in a cloud-based organization. Send As permission allows delegates to use the mailbox to send messages. After this permission is assigned to a delegate, any message that the delegate sends from the mailbox appears to be sent by the mailbox owner. However, this permission doesn't allow a delegate to sign in to the user's mailbox. It only allows users to open the mailbox. If this permission is assigned to a group, a message sent by the delegate appears to be sent by the group.

## EXAMPLES

### Example 1
```powershell
Get-EXORecipientPermission -ResultSize 100
```
Above example returns recipient permission for first 100 mailbox users in the name sorted order.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter identifies the recipient that you want to view. The user or group specified by the Trustee parameter has Send As permissions on this recipient. You can specify any type of recipient, for example:

- Mailboxes
- Mail users
- Mail contacts
- Distribution groups
- Dynamic distribution groups

For the best performance, we recommend using the following values to identify the recipient:

- User ID or user principal name (UPN)
- GUID

Otherwise, you can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Domain\\Username
- Email address
- LegacyExchangeDN
- SamAccountName

You can't use this parameter with the ExternalDirectoryObjectId, PrimarySmtpAddress, or UserPrincipalName parameters.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AccessRights

> Applicable: Exchange Online

The AccessRights parameter filters the results by permission. The only valid value for this parameter is SendAs.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDirectoryObjectId

> Applicable: Exchange Online

The ExternalDirectoryObjectId parameter identifies the recipient that you want to view by the ObjectId in Microsoft Entra ID.

You can't use this parameter with the Identity, PrimarySmtpAddress, or UserPrincipalName parameters.

```yaml
Type: Guid
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PrimarySmtpAddress

> Applicable: Exchange Online

The PrimarySmtpAddress identifies the recipient that you want to view by primary SMTP email address (for example, navin@contoso.com).

You can't use this parameter with the ExternalDirectoryObjectId, Identity, or UserPrincipalName parameters.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Online

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Trustee

> Applicable: Exchange Online

The Trustee parameter filters the results by the user or group who has Send As permissions. You can specify the following types of users or groups:

- Mailbox users
- Mail users with a Microsoft account
- Security groups

You can use any value that uniquely identifies the user or group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- User Principal name (UPN)

You need to use this parameter with the Identity, PrimarySmtpAddress, UserPrincipalName, or ExternalDirectoryObjectId parameters.

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

The UserPrincipalName parameter identifies the recipient that you want to view by UPN (for example, navin@contoso.onmicrosoft.com).

You can't use this parameter with the ExternalDirectoryObjectId, Identity, or PrimarySmtpAddress parameters.

```yaml
Type: String
Parameter Sets: Identity
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
