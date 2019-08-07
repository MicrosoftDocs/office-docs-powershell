---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
title: Get-ExoMailbox
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-ExoMailbox

## SYNOPSIS
This cmdlet is available only in the REST API Client module for Exchange Online. For more information, see <link to topic>.

Use the Get-ExoMailbox cmdlet to view mailbox objects and attributes, populate property pages, or supply mailbox information to other tasks.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Identity (Default)
```
Get-ExoMailbox
 [-Archive]
 [-ExternalDirectoryObjectId <Guid>]
 [-Filter <String>]
 [[-Identity] <String>]
 [-InactiveMailboxOnly]
 [-IncludeInactiveMailbox]
 [-MailboxPlan <String>]
 [-OrganizationalUnit <String>]
 [-Properties <String[]>]
 [-PropertySets <PropertySet[]>]
 [-RecipientTypeDetails <String[]>]
 [-ResultSize <Unlimited>]
 [-SoftDeletedMailbox]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

### Anr
```
Get-ExoMailbox
 [-Anr <String>]
 [-Archive]
 [-Filter <String>]
 [-InactiveMailboxOnly]
 [-IncludeInactiveMailbox]
 [-MailboxPlan <String>]
 [-OrganizationalUnit <String>]
 [-Properties <String[]>]
 [-PropertySets <PropertySet[]>]
 [-RecipientTypeDetails <String[]>]
 [-ResultSize <Unlimited>]
 [-SoftDeletedMailbox]
 [<CommonParameters>]
```

## DESCRIPTION
{{ Fill in the Description }}

## EXAMPLES

### E-------------------------- Example 1 --------------------------
```
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Anr
The Anr parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are:

- CommonName (CN)

- DisplayName

- FirstName

- LastName

- Alias

```yaml
Type: String
Parameter Sets: Anr
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive
The Archive switch is required to return archive mailboxes in the results. You don't need to specify a value with this switch.

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

### -ExternalDirectoryObjectId
{{ Fill ExternalDirectoryObjectId Description }}

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

### -Filter
The Filter parameter indicates the OPath filter used to filter recipients.

For more information about the filterable properties, see Filterable properties for the -Filter parameter (https://technet.microsoft.com/library/bb738155.aspx).

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

### -Identity
The Identity parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox. For example:

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

You can't use this parameter with the Anr parameter.

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

### -InactiveMailboxOnly
The InactiveMailboxOnly switch specifies whether to return only inactive mailboxes in the results. You don't need to specify a value with this switch.

An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. The contents of an inactive mailbox are preserved until the hold is removed.

To include active and inactive mailboxes in the results, don't use this switch. Instead, use the IncludeInactiveMailbox switch.

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

### -IncludeInactiveMailbox
The IncludeInactiveMailbox switch specifies whether to include inactive mailboxes in the results. You don't need to specify a value with this switch.

An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. The contents of an inactive mailbox are preserved until the hold is removed.

To return only inactive mailboxes in the results, don't use this switch. Instead, use the InactiveMailboxOnly switch.

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

### -MailboxPlan
The MailboxPlan parameter filters the results by mailbox plan. When you use this parameter, only mailboxes that are assigned the specified mailbox plan are returned in the results. You can use any value that uniquely identifies the mailbox plan. For example:

- Name

- Alias

- Display name

- Distinguished name (DN)

- GUID

A mailbox plan specifies the permissions and features available to a mailbox user in cloud-based organizations. You can see the available mailbox plans by using the Get-MailboxPlan cmdlet.

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

### -OrganizationalUnit
The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

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

### -Properties
{{ Fill Properties Description }}

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertySets
{{ Fill PropertySets Description }}

```yaml
Type: PropertySet[]
Parameter Sets: (All)
Aliases:
Accepted values: All, Minimum, AddressList, Archive, Audit, Custom, Delivery, Hold, Moderation, Move, Policy, PublicFolder, Quota, Resource, Retention, SCL, SoftDelete, StatisticsSeed

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientTypeDetails
The RecipientTypeDetails parameter filters the results by the specified mailbox subtype. Valid values are:

- DiscoveryMailbox

- EquipmentMailbox

- GroupMailbox

- LegacyMailbox

- LinkedMailbox

- LinkedRoomMailbox

- RoomMailbox

- SchedulingMailbox

- SharedMailbox

- TeamMailbox

- UserMailbox

You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SoftDeletedMailbox
The SoftDeletedMailbox switch is required to return soft-deleted mailboxes in the results. You don't need to specify a value with this switch.

Soft-deleted mailboxes are deleted mailboxes that are still recoverable.

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

### -UserPrincipalName
{{ Fill UserPrincipalName Description }}

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/exo-module/get-exomailbox)
