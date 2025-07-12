---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-addresslist
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: New-AddressList
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# New-AddressList

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-AddressList cmdlet to create address lists and apply them to recipients.

In Exchange Online, this cmdlet is available only in the Address Lists role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Address Lists role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://learn.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### PrecannedFilter
```
New-AddressList [-Name] <String> -IncludedRecipients <WellKnownRecipientType>
 [-ConditionalCompany <MultiValuedProperty>]
 [-ConditionalCustomAttribute1 <MultiValuedProperty>]
 [-ConditionalCustomAttribute10 <MultiValuedProperty>]
 [-ConditionalCustomAttribute11 <MultiValuedProperty>]
 [-ConditionalCustomAttribute12 <MultiValuedProperty>]
 [-ConditionalCustomAttribute13 <MultiValuedProperty>]
 [-ConditionalCustomAttribute14 <MultiValuedProperty>]
 [-ConditionalCustomAttribute15 <MultiValuedProperty>]
 [-ConditionalCustomAttribute2 <MultiValuedProperty>]
 [-ConditionalCustomAttribute3 <MultiValuedProperty>]
 [-ConditionalCustomAttribute4 <MultiValuedProperty>]
 [-ConditionalCustomAttribute5 <MultiValuedProperty>]
 [-ConditionalCustomAttribute6 <MultiValuedProperty>]
 [-ConditionalCustomAttribute7 <MultiValuedProperty>]
 [-ConditionalCustomAttribute8 <MultiValuedProperty>]
 [-ConditionalCustomAttribute9 <MultiValuedProperty>]
 [-ConditionalDepartment <MultiValuedProperty>]
 [-ConditionalStateOrProvince <MultiValuedProperty>]
 [-Confirm]
 [-Container <AddressListIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-RecipientContainer <OrganizationalUnitIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### CustomFilter
```
New-AddressList [-Name] <String> -RecipientFilter <String>
 [-Confirm]
 [-Container <AddressListIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-RecipientContainer <OrganizationalUnitIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Conditional parameters that are used with the IncludedRecipients parameter are subject to the following limitations:

- The EQV operator is used for every property value, as in "Department equals Sales". Wildcards and partial matches aren't supported.
- The OR operator is always used for multiple values of the same property, as in "Department equals Sales OR Marketing".
- The AND operator is always used for multiple properties, as in "Department equals Sales AND Company equals Contoso".

To create flexible filters that use any available recipient property and that aren't subject to these limitations, you can use the RecipientFilter parameter to create an OPATH filter.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-AddressList -Name MyAddressList -RecipientFilter "((RecipientTypeDetails -eq 'UserMailbox') -and ((StateOrProvince -eq 'Washington') -or (StateOrProvince -eq 'Oregon')))"
```

This example creates the address list MyAddressList. The address list includes recipients that are mailbox users and have the StateOrProvince property set to Washington or Oregon.

### Example 2
```powershell
New-AddressList -Name MyAddressList2 -ConditionalStateOrProvince Washington -IncludedRecipients MailboxUsers
```

This example creates the address list MyAddressList2 that includes mailboxes that have the ConditionalStateOrProvince parameter set to Washington.

### Example 3
```powershell
New-AddressList -Name "AL_AgencyB" -RecipientFilter "((RecipientTypeDetails -eq 'UserMailbox') -and (CustomAttribute15 -like 'AgencyB*'))"
```

This example creates the address list AL\_AgencyB that includes mailboxes that have the value of the CustomAttribute15 parameter contains AgencyB.

## PARAMETERS

### -Name
The Name parameter specifies the unique name for the new address list. The maximum length is 64 characters, and it can't include a carriage return or a backslash (\\). If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludedRecipients
The IncludedRecipients parameter specifies a precanned filter that's based on the recipient type. Valid values are:

- AllRecipients: This value can be used only by itself.
- MailboxUsers
- MailContacts
- MailGroups
- MailUsers
- Resources: This value indicates room or equipment mailboxes.

You can specify multiple values separated by commas. When you use multiple values, the OR Boolean operator is applied.

You need to use this parameter when you use any Conditional parameters as part of a precanned filter. You can't use this parameter in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: WellKnownRecipientType
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientFilter
The RecipientFilter parameter specifies a custom OPATH filter that's based on the value of any available recipient property. You can use any available Windows PowerShell operator, and wildcards and partial matches are supported. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For filterable properties, see [Filterable properties for the RecipientFilter parameter](https://learn.microsoft.com/powershell/exchange/recipientfilter-properties).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to filter on. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).
- In cloud-based environments, you can't use a wildcard as the first character. For example, `'Sales*'` is allowed, but `'*Sales'` isn't allowed.
- In on-premises Exchange, wildcards are valid only as the first or last character. For example, `'Sales*'` or `'*Sales'` are allowed, but `'Sa*les'` isn't allowed.

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

You can't use this parameter in combination with the IncludedRecipients parameter or any Conditional parameters (which are used to create precanned filters).

```yaml
Type: String
Parameter Sets: CustomFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCompany
The ConditionalCompany parameter specifies a precanned filter that's based on the value of the recipient's Company property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute1
The ConditionalCustomAttribute1 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute1 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute10
The ConditionalCustomAttribute10 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute10 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute11
The ConditionalCustomAttribute11 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute11 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute12
The ConditionalCustomAttribute12 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute12 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute13
The ConditionalCustomAttribute13 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute13 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute14
The ConditionalCustomAttribute14 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute14 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute15
The ConditionalCustomAttribute15 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute15 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute2
The ConditionalCustomAttribute2 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute2 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute3
The ConditionalCustomAttribute3 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute3 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute4
The ConditionalCustomAttribute4 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute4 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute5
The ConditionalCustomAttribute5 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute5 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute6
The ConditionalCustomAttribute6 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute6 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute7
The ConditionalCustomAttribute7 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute7 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute8
The ConditionalCustomAttribute8 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute8 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute9
The ConditionalCustomAttribute9 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute9 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalDepartment
The ConditionalDepartment parameter specifies a precanned filter that's based on the value of the recipient's Department property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalStateOrProvince
The ConditionalStateOrProvince parameter specifies a precanned filter that's based on the value of the recipient's StateOrProvince property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Container
The Container parameter specifies where to create the address list. Valid input for this parameter is under the root "\\" (also known as All Address Lists) or under an existing address list. You can use any value that uniquely identifies the address list. For example:

- Name
- Distinguished name (DN)
- GUID
- Path: `"\AddressListName"` or `"\ContainerName\AddressListName"` (for example, `"\All Users"` or `"\All Contacts\Marketing"`)

If you don't use this parameter,the address list is created under the root (\\).

```yaml
Type: AddressListIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the display name of the address list. The display name is visible in the Exchange admin center and Outlook. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

If you don't use the DisplayName parameter, the value of the Name parameter is used for the display name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientContainer
This parameter is available only in on-premises Exchange.

The RecipientContainer parameter specifies a filter that's based on the recipient's location in Active Directory. Valid input for this parameter is an organizational unit (OU) or domain that's returned by the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name
- Canonical name
- Distinguished name (DN)
- GUID

If you don't use this parameter, the default value is the OU where the object was created.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
