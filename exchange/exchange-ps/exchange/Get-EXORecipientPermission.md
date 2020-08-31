---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/get-exorecipientpermission
applicable: Exchange Online
title: Get-EXORecipientPermission
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: navgupta
monikerRange: "exchonline-ps"
---

# Get-EXORecipientPermission

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

Use the Get-EXORecipientPermission cmdlet to view information about SendAs permissions that are configured for users in a cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default (Default)
```
Get-EXORecipientPermission
 [-AccessRights <MultiValuedProperty>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### Identity
```
Get-EXORecipientPermission [[-Identity] <String>]
 [-AccessRights <MultiValuedProperty>]
 [-ExternalDirectoryObjectId <Guid>]
 [-PrimarySmtpAddress <String>
 [-ResultSize <Unlimited>]
 [-Trustee <String>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to view/manage information about SendAs permissions that are configured for users in a cloud-based organization. Send As permission allows delegates to use the mailbox to send messages. After this permission is assigned to a delegate, any message that the delegate sends from the mailbox will appear to have been sent by the mailbox owner. However, this permission doesn't allow a delegate to sign in to the user's mailbox. It only allows users to open the mailbox. If this permission is assigned to a group, a message sent by the delegate will appear to have been sent by the group.

## EXAMPLES

### Example 1
```powershell
Get-EXORecipientPermission -ResultSize 100
```
Above example returns recipient permission for first 100 mailbox users in the name sorted order.

## PARAMETERS

### -Identity
The Identity parameter filters the results by the target recipient. The user or group specified by the Trustee parameter can operate on this recipient.

You can specify any type of recipient, for example:

- Mailboxes

- Mail users

- External contacts

- Distribution groups

- Dynamic distribution groups

For the best performance, we recommend using the following values to identify the recipient:

- User ID or user principal name (UPN)

- GUID

Otherwise, you can use any value that uniquely identifies the mailbox. For example:

- Name

- Alias

- Distinguished name (DN)

- \<domain name\>\\\<account name\>

- Email address

- LegacyExchangeDN

- SamAccountName

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AccessRights
The AccessRights parameter filters the results by permission.

The only valid value for this parameter is SendAs.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDirectoryObjectId
The ExternalDirectoryObjectId parameter identifies the mailbox you want to view by using the ObjectId of the mailbox in Azure Active Directory. You can use this value instead of the Identity parameter.

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

### -PrimarySmtpAddress
This parameter is reserved for internal Microsoft use.

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

### -Trustee
The Trustee parameter filters the results by the user or group to whom you're granting the permission. The user or group can operate on the recipient specified by the Identity, UserPrincipalName, or ExternalDirectoryObjectId parameters (and you can only use the Trustee parameter with those parameters).

**Note**: Trustee parameter can be specified only with Identity, UserPrincipalName, ExternalDirectoryObjectId parameters

You can specify the following types of users or groups:

- Mailbox users

- Mail users with a Microsoft account (formerly known as a Windows Live ID)

- Security groups

You can use any value that uniquely identifies the user or group. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- User Principal name (UPN)

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
The UserPrincipalName parameter specifies the UPN for the mailbox you want to view (for example, navin.contoso.com).

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
