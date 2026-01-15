---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-exorecipient
schema: 2.0.0
title: Get-EXORecipient
---

# Get-EXORecipient

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-EXORecipient cmdlet to view existing recipient objects in your organization. This cmdlet returns all mail-enabled objects (for example, mailboxes, mail users, mail contacts, and distribution groups).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
Get-EXORecipient [[-Identity] <String>]
 [-ExternalDirectoryObjectId <Guid>]
 [-Filter <String>]
 [-IncludeSoftDeletedRecipients]
 [-OrganizationalUnit <String>]
 [-PrimarySmtpAddress <String>]
 [-Properties <String[]>]
 [-PropertySets <PropertySet[]>]
 [-RecipientPreviewFilter <String>]
 [-RecipientType <String[]>]
 [-RecipientTypeDetails <String[]>]
 [-ResultSize <Unlimited>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

### Anr
```
Get-EXORecipient [-Anr <String>]
 [-Filter <String>]
 [-IncludeSoftDeletedRecipients]
 [-OrganizationalUnit <String>]
 [-Properties <String[]>]
 [-PropertySets <PropertySet[]>]
 [-RecipientPreviewFilter <String>]
 [-RecipientType <String[]>]
 [-RecipientTypeDetails <String[]>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
Get-EXORecipient cmdlet can be used to view existing recipient objects in your organization. This cmdlet returns all mail-enabled objects (for example, mailboxes, mail users, mail contacts, and distribution groups).

## EXAMPLES

### Example 1
```powershell
Get-EXORecipient -ResultSize 100
```

This example returns the first 100 recipient objects in name sorted order.

### Example 2
```powershell
Get-EXORecipient -Identity john@contoso.com
```

This example returns the recipient attribute details for the user john@contoso.com

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the recipient object that you want to view. For the best performance, we recommend using the following values to identify the recipient:

- User ID or user principal name (UPN)
- GUID

Otherwise, you can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Domain\\Username
- Email address
- LegacyExchangeDN
- SamAccountName

You can't use this parameter with the Anr, ExternalDirectoryObjectId, PrimarySmtpAddress, or UserPrincipalName parameters.

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

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

### -Anr

> Applicable: Exchange Online

The Anr parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are:

- CommonName (CN)
- DisplayName
- FirstName
- LastName
- Alias

You can't use this parameter with the ExternalDirectoryObjectId, Identity, PrimarySmtpAddress, or UserPrincipalName parameters.

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

### -ExternalDirectoryObjectId

> Applicable: Exchange Online

The ExternalDirectoryObjectId parameter identifies the recipient that you want to view by the ObjectId in Microsoft Entra ID.

You can't use this parameter with the Anr, Identity, PrimarySmtpAddress, or UserPrincipalName parameters.

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

> Applicable: Exchange Online

The Filter parameter uses OPATH syntax to filter the results by the specified properties and values. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For more information about the filterable properties, see [Get-EXORecipient property sets](https://learn.microsoft.com/powershell/exchange/cmdlet-property-sets#get-exorecipient-property-sets) and [Filterable properties for the Filter parameter](https://learn.microsoft.com/powershell/exchange/filter-properties).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

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

### -IncludeSoftDeletedRecipients

> Applicable: Exchange Online

The IncludeSoftDeletedRecipients switch specifies whether to include soft deleted recipients in the results. You don't need to specify a value with this switch.

Soft-deleted recipients are deleted recipients that are still recoverable.

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

### -OrganizationalUnit

> Applicable: Exchange Online

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

### -PrimarySmtpAddress

> Applicable: Exchange Online

The PrimarySmtpAddress identifies the recipient that you want to view by primary SMTP email address (for example, navin@contoso.com).

You can't use this parameter with the Anr, ExternalDirectoryObjectId, Identity or UserPrincipalName parameters.

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

### -Properties

> Applicable: Exchange Online

The Properties parameter specifies the properties that are returned in the output of this cmdlet. You can specify multiple values separated by commas.

For more information about the available properties, see [Get-EXORecipient property sets](https://learn.microsoft.com/powershell/exchange/cmdlet-property-sets#get-exorecipient-property-sets).

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

> Applicable: Exchange Online

The PropertySets parameter specifies a logical grouping of properties that are returned in the output of this cmdlet. Valid values are:

- Minimum (this is the default value)
- Archive
- Custom
- MailboxMove
- Policy

For more information about the properties that are included in each property set, see [Get-EXORecipient property sets](https://learn.microsoft.com/powershell/exchange/cmdlet-property-sets#get-exorecipient-property-sets).

```yaml
Type: PropertySet[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientPreviewFilter

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

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

### -RecipientType

> Applicable: Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientTypeDetails

> Applicable: Exchange Online

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
- SharedWithMailUser
- TeamMailbox
- UserMailbox

You can specify multiple values separated by commas.

The value of the RecipientType parameter affects the values that you can use for this parameter. For example, if you use the RecipientType value MailContact, you can't use the value UserMailbox for this parameter. You get the error: None of the specified RecipientTypeDetails are included in any specified recipient type.

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

### -UserPrincipalName

> Applicable: Exchange Online

The UserPrincipalName parameter identifies the recipient that you want to view by UPN (for example, navin@contoso.onmicrosoft.com).

You can't use this parameter with the Anr, ExternalDirectoryObjectId, Identity, or PrimarySmtpAddress parameters.

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
