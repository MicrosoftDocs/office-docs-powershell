---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
applicable: Exchange Online
title: Get-EXORecipient
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-EXORecipient

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

Use the Get-ExORecipient cmdlet to view existing recipient objects in your organization. This cmdlet returns all mail-enabled objects (for example, mailboxes, mail users, mail contacts, and distribution groups).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Identity (Default)
```
Get-EXORecipient
 [-Filter <String>]
 [-OrganizationalUnit <String>]
 [-Properties <String[]>]
 [-PropertySets <PropertySet[]>]
 [-IncludeSoftDeletedRecipients]
 [-RecipientType <String[]>]
 [-RecipientTypeDetails <String[]>]
 [[-Identity] <String>]
 [-ExternalDirectoryObjectId <Guid>]
 [-UserPrincipalName <String>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### Anr
```
Get-EXORecipient
 [-Anr <String>]
 [-Filter <String>]
 [-OrganizationalUnit <String>]
 [-Properties <String[]>]
 [-PropertySets <PropertySet[]>]
 [-IncludeSoftDeletedRecipients]
 [-RecipientType <String[]>]
 [-RecipientTypeDetails <String[]>]
 [-ResultSize <Unlimited>]
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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDirectoryObjectId
This parameter is reserved for internal Microsoft use.

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

### -Filter
The Filter parameter indicates the OPath filter used to filter recipients.

For more information about the filterable properties, see Filterable properties for the -Filter parameter (https://technet.microsoft.com/library/bb738155.aspx).

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
The Identity parameter specifies the recipient object that you want to view. You can use any value that uniquely identifies the recipient. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

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

### -IncludeSoftDeletedRecipients
The IncludeSoftDeletedRecipients switch specifies whether to include soft deleted recipients in the results. You don't need to specify a value with this switch.

Soft-deleted recipients are deleted recipients that are still recoverable.

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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Properties
The Properties parameter specifies the properties that are returned in the output of this cmdlet. You can specify multiple values separated by commas. Wildcards ( * ) are supported.

For more information about the available properties, see [Get-EXORecipient property sets](https://review.docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/cmdlet-property-sets?branch=ExORestModule-chrisda#get-exorecipient-property-sets).

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertySets
The PropertySets parameter specifies a logical grouping of properties that are returned in the output of this cmdlet. Valid values are:

- Minimum (this is the default value)

- Archive

- Custom

- MailboxMove

- Policy

For more information about the properties that are included in each property set, see [Get-EXORecipient property sets](https://review.docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/cmdlet-property-sets?branch=ExORestModule-chrisda#get-exorecipient-property-sets).

```yaml
Type: PropertySet[]
Parameter Sets: (All)
Aliases:
Accepted values: All, Minimum, Custom, MailboxMove, Policy, Archive
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientType
The RecipientType parameter filters the results by the specified recipient type. Valid values are:

- DynamicDistributionGroup

- MailContact

- MailNonUniversalGroup

- MailUniversalDistributionGroup

- MailUniversalSecurityGroup

- MailUser

- PublicFolder

- UserMailbox

You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientTypeDetails
The RecipientTypeDetails parameter filters the results by the specified recipient subtype. Valid values are:

- DiscoveryMailbox

- DynamicDistributionGroup

- EquipmentMailbox

- GroupMailbox

- GuestMailUser

- LegacyMailbox

- LinkedMailbox

- LinkedRoomMailbox

- MailContact

- MailForestContact

- MailNonUniversalGroup

- MailUniversalDistributionGroup

- MailUniversalSecurityGroup

- MailUser

- PublicFolder

- PublicFolderMailbox

- RemoteEquipmentMailbox

- RemoteRoomMailbox

- RemoteSharedMailbox

- RemoteTeamMailbox

- RemoteUserMailbox

- RoomList

- RoomMailbox

- SchedulingMailbox

- SharedMailbox

- TeamMailbox

- UserMailbox

You can specify multiple values separated by commas.

The value of the RecipientType parameter affects the values that you can use for this parameter. For example, if you use the RecipientType value MailContact, you can't use the value UserMailbox for this parameter. You'll receive the error: None of the specified RecipientTypeDetails are included in any specified recipient type.

```yaml
Type: String[]
Parameter Sets: (All)
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exorecipient)
