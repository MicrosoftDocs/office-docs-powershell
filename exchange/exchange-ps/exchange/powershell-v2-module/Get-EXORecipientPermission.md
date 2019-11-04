---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
applicable: Exchange Online
title: Get-EXORecipientPermission
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-EXORecipientPermission

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

Use the Get-EXORecipientPermission cmdlet to view information about SendAs permissions that are configured for users in a cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

### Default (Default)
```
Get-EXORecipientPermission [-Trustee <String>]
 [-AccessRights <MultiValuedProperty>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### Identity
```
Get-EXORecipientPermission [-Trustee <String>]
 [-AccessRights <MultiValuedProperty>]
 [[-Identity] <String>]
 [-ExternalDirectoryObjectId <Guid>]
 [-UserPrincipalName <String>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to view/manage information about SendAs permissions that are configured for users in a cloud-based organization. Send As permission allows delegates to use the mailbox to send messages. After this permission is assigned to a delegate, any message that the delegate sends from the mailbox will appear to have been sent by the mailbox owner. However, this permission doesn't allow a delegate to sign in to the user's mailbox. It only allows users to open the mailbox. If this permission is assigned to a group, a message sent by the delegate will appear to have been sent by the group.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-EXORecipientPermission -ResultSize 100
```
Above example returns recipient permission for first 100 mailbox users in the name sorted order.

## PARAMETERS

### -AccessRights
The AccessRights parameter filters the results by permission.

The value value for this parameter is SendAs.

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

### -Identity
The Identity parameter filters the results by the target recipient. The user or group specified by the Trustee parameter can operate on this recipient.

You can specify any type of recipient, for example:

- Mailboxes

- Mail users

- External contacts

- Distribution groups

- Dynamic distribution groups

You can use any value that uniquely identifies the recipient. For example:

- External Directory Object ID

- User Principal Name

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
Parameter Sets: (All)
Aliases:
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

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exorecipientpermission)
