---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/new-dynamicdistributiongroup
schema: 2.0.0
title: New-DynamicDistributionGroup
---

# New-DynamicDistributionGroup

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-DynamicDistributionGroup cmdlet to create dynamic distribution groups. A dynamic distribution group queries mail-enabled objects and builds the group membership based on the results. The group membership is recalculated whenever an email message is sent to the group.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### PrecannedFilter
```
New-DynamicDistributionGroup [-Name] <String> -IncludedRecipients <WellKnownRecipientType>
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
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
 [-DirectMembershipOnly <Boolean>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientContainer <OrganizationalUnitIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-WhatIf]
 [<CommonParameters>]
```

### CustomFilter
```
New-DynamicDistributionGroup [-Name] <String> -RecipientFilter <String>
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-Confirm]
 [-DirectMembershipOnly <Boolean>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientContainer <OrganizationalUnitIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Conditional parameters that are used with the IncludedRecipients parameter are subject to the following limitations:

- The EQV operator is used for every property value, as in "Department equals Sales". Wildcards and partial matches aren't supported.
- The OR operator is always used for multiple values of the same property, as in "Department equals Sales OR Marketing".
- The AND operator is always used for multiple properties, as in "Department equals Sales AND Company equals Contoso".

To create flexible filters that use any available recipient property and that aren't subject to these limitations, you can use the RecipientFilter parameter to create a custom OPATH filter.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-DynamicDistributionGroup -Name "Marketing Group" -IncludedRecipients "MailboxUsers,MailContacts" -ConditionalDepartment "Marketing","Sales"
```

This example creates a dynamic distribution group named Marketing Group that contains all recipients who have a Department field that equals the strings "Marketing" or "Sales". Because we didn't use the OrganizationalUnit or RecipientContainer parameters, the group looks for recipients in the default location (typically, the Users container).

### Example 2
```powershell
New-DynamicDistributionGroup -Name "Washington Management Team" -RecipientFilter "(RecipientTypeDetails -eq 'UserMailbox') -and (Title -like 'Director*' -or Title -like 'Manager*') -and (StateOrProvince -eq 'WA')" -RecipientContainer "North America"
```

This example creates a dynamic distribution group named Washington Management Team that contains all users in the organizational unit named North America from Washington State whose titles start with "Director" or "Manager".

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Name parameter specifies the unique name of the dynamic distribution group. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

This value is also used for the DisplayName property if you don't use the DisplayName parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludedRecipients

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientFilter

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The RecipientFilter parameter specifies a custom OPATH filter that's based on the value of any available recipient property. You can use any available Windows PowerShell operator, and wildcards and partial matches are supported. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For filterable properties, see [Filterable properties for the RecipientFilter parameter](https://learn.microsoft.com/powershell/exchange/recipientfilter-properties).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to filter on. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).
- In cloud-based environments, you can't use a wildcard as the first character. For example, `'Sales*'` is allowed, but `'*Sales'` isn't allowed.
- In on-premises Exchange, wildcards are valid only as the first or last character. For example, `'Sales*'` or `'*Sales'` are allowed, but `'Sa*les'` isn't allowed.

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

You can't use this parameter in combination with the IncludedRecipients parameter or any Conditional parameters (which are used to create precanned filters).

The maximum length for the RecipientFilter property is 2048 characters, including internal syntax.

```yaml
Type: String
Parameter Sets: CustomFilter
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value. The maximum length is 64 characters.

The Alias value can contain letters, numbers and the following characters:

- !, #, %, \*, +, -, /, =, ?, ^, \_, and ~.
- $, &, ', \`, {, }, and \| need to be escaped (for example ``-Alias what`'snew``) or the entire value enclosed in single quotation marks (for example, `-Alias 'what'snew'`). The & character is not supported in the Alias value for Microsoft Entra Connect synchronization.
- Periods (.) must be surrounded by other valid characters (for example, `help.desk`).
- Unicode characters U+00A1 to U+00FF.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (`alias@domain`). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to `oe` in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.onmicrosoft.com results in the Alias property value `helpdesk`.
- Recipients without user accounts (for example, room mailboxes, mail contacts, and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

The Alias parameter never generates or updates the primary email address of a mail contact or a mail user.

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

### -ArbitrationMailbox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ArbitrationMailbox parameter specifies the arbitration mailbox that's used to manage the moderation process for this recipient. You can use any value that uniquely identifies the arbitration mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCompany

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCompany parameter specifies a precanned filter that's based on the value of the recipient's Company property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute1

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute1 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute1 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute10

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute10 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute10 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute11

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute11 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute11 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute12

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute12 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute12 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute13

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute13 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute13 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute14

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute14 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute14 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute15

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute15 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute15 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute2

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute2 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute2 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute3

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute3 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute3 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute4

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute4 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute4 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute5

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute5 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute5 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute6

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute6 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute6 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute7

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute7 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute7 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute8

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute8 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute8 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute9

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalCustomAttribute9 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute9 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalDepartment

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalDepartment parameter specifies a precanned filter that's based on the value of the recipient's Department property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalStateOrProvince

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ConditionalStateOrProvince parameter specifies a precanned filter that's based on the value of the recipient's StateOrProvince property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: PrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DirectMembershipOnly

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The DisplayName parameter specifies the display name of the dynamic distribution group. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

If you don't use the DisplayName parameter, the value of the Name parameter is used for the display name.

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModeratedBy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ModeratedBy parameter specifies one or more moderators for this recipient. A moderator approves messages sent to the recipient before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

You use this parameter to specify at least one moderator when you set the ModerationEnabled parameter to the value $true.

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

### -ModerationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ModerationEnabled parameter specifies whether moderation is enabled for this recipient. Valid value are:

- $true: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.
- $false: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This is the default value.

You use the ModeratedBy parameter to specify the moderators.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The OrganizationalUnit parameter specifies the organizational unit (OU) where the dynamic distribution group is created.

Valid input for this parameter is an organizational unit (OU) or domain that's returned by the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name
- Canonical name
- Distinguished name (DN)
- GUID

If you don't use this parameter, the default value is typically the Users container in the domain of the Exchange server that you're connected to (also known as the recipient scope). In on-premises Exchange, you can change the recipient scope for the current PowerShell session by using the Set-AdServerSettings cmdlet.

If you don't use the RecipientContainer parameter, the location of the dynamic distribution group is used for the RecipientContainer property (the default location, or the value you specify for the OrganizationalUnit parameter).

**Note**: Although this parameter is available in Exchange Online, there's only one usable OU in an Exchange Online organization, so using this parameter has no effect.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientContainer

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The RecipientContainer parameter specifies a filter that's based on the recipient's location in Active Directory. Valid input for this parameter is an organizational unit (OU) or domain that's returned by the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name
- Canonical name
- Distinguished name (DN)
- GUID

If you don't use this parameter, the default value is the OU where the object was created.

Note that the RecipientContainer property can't be blank. The group is always limited to looking for recipients in a specific location (the value you specify for this parameter, or the location where the group was created).

**Note**: Although this parameter is available in Exchange Online, there's only one usable OU in an Exchange Online organization, so using this parameter has no effect.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendModerationNotifications

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The SendModerationNotifications parameter specifies when moderation notification messages are sent. Valid values are:

- Always: Notify all senders when their messages aren't approved. This is the default value.
- Internal: Notify senders in the organization when their messages aren't approved.
- Never: Don't notify anyone when a message isn't approved.

This parameter is only meaningful when moderation is enabled (the ModerationEnabled parameter has the value $true).

```yaml
Type: TransportModerationNotificationFlags
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
