---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-emailaddresspolicy
schema: 2.0.0
title: New-EmailAddressPolicy
---

# New-EmailAddressPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the New-EmailAddressPolicy cmdlet to create email address policies. In Exchange Online, email address policies are available only for Microsoft 365 Groups.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### AllTemplatesWithPrecannedFilter
```
New-EmailAddressPolicy [-Name] <String> -EnabledEmailAddressTemplates <ProxyAddressTemplateCollection> -IncludedRecipients <WellKnownRecipientType>
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
 [-DisabledEmailAddressTemplates <ProxyAddressTemplateCollection>]
 [-DomainController <Fqdn>]
 [-Priority <EmailAddressPolicyPriority>]
 [-RecipientContainer <OrganizationalUnitIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### AllTemplatesWithCustomFilter
```
New-EmailAddressPolicy [-Name] <String> -EnabledEmailAddressTemplates <ProxyAddressTemplateCollection> -RecipientFilter <String>
 [-Confirm]
 [-DisabledEmailAddressTemplates <ProxyAddressTemplateCollection>]
 [-DomainController <Fqdn>]
 [-Priority <EmailAddressPolicyPriority>]
 [-RecipientContainer <OrganizationalUnitIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### SMTPTemplateWithPrecannedFilter
```
New-EmailAddressPolicy [-Name] <String> -EnabledPrimarySMTPAddressTemplate <String> -IncludedRecipients <WellKnownRecipientType>
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
 [-DomainController <Fqdn>]
 [-Priority <EmailAddressPolicyPriority>]
 [-RecipientContainer <OrganizationalUnitIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### SMTPTemplateWithCustomFilter
```
New-EmailAddressPolicy [-Name] <String> -EnabledPrimarySMTPAddressTemplate <String> -RecipientFilter <String>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Priority <EmailAddressPolicyPriority>]
 [-RecipientContainer <OrganizationalUnitIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### AllTemplatesForUnifiedGroupRecipientsFilter
```
New-EmailAddressPolicy [-Name] <String> -EnabledEmailAddressTemplates <ProxyAddressTemplateCollection>
 [-IncludeUnifiedGroupRecipients]
 [-ManagedByFilter <String>]
 [-Confirm]
 [-DisabledEmailAddressTemplates <ProxyAddressTemplateCollection>]
 [-DomainController <Fqdn>]
 [-Priority <EmailAddressPolicyPriority>]
 [-RecipientContainer <OrganizationalUnitIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### SMTPTemplateForUnifiedGroupRecipientsFilter
```
New-EmailAddressPolicy [-Name] <String> -EnabledPrimarySMTPAddressTemplate <String>
 [-IncludeUnifiedGroupRecipients]
 [-ManagedByFilter <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Priority <EmailAddressPolicyPriority>]
 [-RecipientContainer <OrganizationalUnitIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
After you use the New-EmailAddressPolicy cmdlet to create an email address policy in an on-premises Exchange organization, you need to use the Update-EmailAddressPolicy cmdlet to apply the new policy to recipients.

The Conditional parameters that are used with the IncludedRecipients parameter are subject to the following limitations:

- The EQV operator is used for every property value, as in "Department equals Sales". Wildcards and partial matches aren't supported.
- The OR operator is always used for multiple values of the same property, as in "Department equals Sales OR Marketing".
- The AND operator is always used for multiple properties, as in "Department equals Sales AND Company equals Contoso".

To create flexible filters that use any available recipient property and that aren't subject to these limitations, you can use the RecipientFilter parameter to create an OPATH filter.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-EmailAddressPolicy -Name "Southeast Offices" -IncludedRecipients MailboxUsers -ConditionalStateorProvince "GA","AL","LA" -EnabledEmailAddressTemplates "SMTP:%s%2g@southeast.contoso.com","smtp:%s%2g@southeast.contoso.net"
```

This example creates an email address policy in an on-premises Exchange organization that uses a precanned recipient filter:

- Name: Southeast Offices
- Precanned recipient filter: All users with mailboxes where the State or province value is GA, AL, or LA (Georgia, Alabama, or Louisiana).
- Primary SMTP email address: `<last name>.<first two letters of the first name>@contoso.com`
- Additional proxy email addresses: `<last name>.<first two letters of the first name>@contoso.net`
- Priority:N+1, where N is the number of manually created email address policies that already exist (we didn't use the Priority parameter, and the default value is N+1).

### Example 2
```powershell
New-EmailAddressPolicy -Name "Northwest Executives" -RecipientFilter "(RecipientTypeDetails -eq 'UserMailbox') -and (Title -like '*Director*' -or Title -like '*Manager*') -and (StateOrProvince -eq 'WA' -or StateOrProvince -eq 'OR' -or StateOrProvince -eq 'ID')" -EnabledEmailAddressTemplates "SMTP:%2g%s@contoso.com" -Priority 2
```

This example creates an email address policy in an on-premises Exchange organization that uses a custom recipient filter:

- Name: Northwest Executives
- Custom recipient filter: All users with mailboxes where the Title value contains Director or Manager, and the State or province value is WA, OR, or ID (Washington, Oregon, or Idaho).
- Primary SMTP email address: `<first two letters of the first name><last name>@contoso.com`
- Additional proxy email addresses: None
- Priority: 2

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Name parameter specifies the unique name of the email address policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -EnabledEmailAddressTemplates

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The EnabledEmailAddressTemplates parameter specifies the rules in the email address policy that are used to generate email addresses for recipients.

Valid syntax for this parameter is `Type:AddressFormat`:

- Type: A valid email address type as described in "Address types" section in [Email address policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/email-address-policies/email-address-policies). For example, SMTP for the primary email address, and smtp for proxy addresses.
- AddressFormat: For SMTP email addresses, a domain or subdomain that's configured as accepted domain (authoritative or internal relay), and valid variables and ASCII text characters as described in the "Address formats" section in [Email address policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/email-address-policies/email-address-policies). For example: alias@contoso.com requires the value `%m@contoso.com`, and firstname.lastname@contoso.com requires the value `%g.%s@contoso.com`.

This parameter requires at least one template with the Type value SMTP (to define the primary SMTP email address). After that, if you don't include a Type prefix for a template, the value smtp (an SMTP proxy address) is assumed.

You can specify multiple email address templates separated by commas: `"SMTP:PrimarySMTPEmailAddress","[Type1:]EmailAddress1","[Type2:]EmailAddress2",..."[TypeN:]EmailAddressN"`.

You can't use this parameter with the EnabledPrimarySMTPAddressTemplate parameter.

In Exchange Online PowerShell, you can't use variables in the email address template.

```yaml
Type: ProxyAddressTemplateCollection
Parameter Sets: AllTemplatesWithPrecannedFilter, AllTemplatesWithCustomFilter, AllTemplatesForUnifiedGroupRecipientsFilter
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnabledPrimarySMTPAddressTemplate

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The EnabledPrimarySMTPAddressTemplate parameter specifies the rule in the email address policy that's used to generate the primary SMTP email addresses for recipients. You can use this parameter instead of the EnabledEmailAddressTemplates if the policy only applies the primary email address and no additional proxy addresses.

Valid syntax for this parameter is a domain or subdomain that's configured as an authoritative accepted domain, and valid variables and ASCII text characters as described in the "Address format" section in [Email address policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/email-address-policies/email-address-policies). For example: alias@contoso.com requires the value `%m@contoso.com`, and firstname.lastname@contoso.com requires the value `%g.%s@contoso.com`.

You can't use this parameter with the EnabledEmailAddressTemplates parameter.

In Exchange Online PowerShell, you can't use variables in the email address template.

```yaml
Type: String
Parameter Sets: SMTPTemplateWithPrecannedFilter, SMTPTemplateWithCustomFilter, SMTPTemplateForUnifiedGroupRecipientsFilter
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludedRecipients

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

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
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeUnifiedGroupRecipients

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The IncludeUnifiedGroupRecipients switch specifies that the email address policy applies only to Microsoft 365 Groups. You don't need to specify a value with this switch.

In Exchange Online PowerShell, you always need to use this switch, because email address policies in Exchange Online are only applied to Microsoft 365 groups.

```yaml
Type: SwitchParameter
Parameter Sets: AllTemplatesForUnifiedGroupRecipientsFilter, SMTPTemplateForUnifiedGroupRecipientsFilter
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientFilter

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

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
Parameter Sets: AllTemplatesWithCustomFilter, SMTPTemplateWithCustomFilter
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCompany

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCompany parameter specifies a precanned filter that's based on the value of the recipient's Company property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute1

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute1 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute1 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute10

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute10 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute10 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute11

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute11 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute11 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute12

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute12 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute12 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute13

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute13 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute13 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute14

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute14 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute14 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute15

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute15 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute15 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute2

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute2 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute2 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute3

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute3 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute3 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute4

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute4 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute4 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute5

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute5 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute5 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute6

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute6 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute6 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute7

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute7 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute7 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute8

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute8 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute8 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute9

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalCustomAttribute9 parameter specifies a precanned filter that's based on the value of the recipient's CustomAttribute9 property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalDepartment

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalDepartment parameter specifies a precanned filter that's based on the value of the recipient's Department property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalStateOrProvince

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ConditionalStateOrProvince parameter specifies a precanned filter that's based on the value of the recipient's StateOrProvince property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You use this parameter in combination with the IncludedRecipients parameter as part of a precanned filter. You can't use any Conditional parameters in combination with the RecipientFilter parameter (which is used to create custom OPATH filters).

```yaml
Type: MultiValuedProperty
Parameter Sets: AllTemplatesWithPrecannedFilter, SMTPTemplateWithPrecannedFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

### -DisabledEmailAddressTemplates

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DisabledEmailAddressTemplates parameter specifies the proxy email addresses templates that are included in an email address policy, but aren't used to configure the email addresses of recipients.

Valid syntax for this parameter is `Type:AddressFormat`:

- Type: A valid email address type as described in the "Address types" section in [Email address policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/email-address-policies/email-address-policies). For example, smtp or X400. You can't use SMTP to specify a disabled primary SMTP email address.
- AddressFormat: For SMTP email addresses, a domain or subdomain that's configured as accepted domain (authoritative or internal relay), and valid variables and ASCII text characters as described in the "Address formats" section in [Email address policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/email-address-policies/email-address-policies). For example: alias@contoso.com requires the value `%m@contoso.com`, and firstname.lastname@contoso.com requires the value `%g.%s@contoso.com`.

You can specify multiple disabled email address templates separated by commas: `"[Type1:]EmailAddress1","[Type2:]EmailAddress2",..."[TypeN:]EmailAddressN"`.

```yaml
Type: ProxyAddressTemplateCollection
Parameter Sets: AllTemplatesWithPrecannedFilter, AllTemplatesWithCustomFilter, AllTemplatesForUnifiedGroupRecipientsFilter
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

### -ManagedByFilter

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The ManagedByFilter parameter specifies the email address policies to apply to Microsoft 365 Groups based on the properties of the users who create the Microsoft 365 Groups.

This parameter is an OPATH filter that's based on the value of any available recipient property (for example, `"Department -eq 'Sales'"`). You can use any available Windows PowerShell operator, and wildcards and partial matches are supported. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For filterable recipient properties, see [Filterable properties for the RecipientFilter parameter](https://learn.microsoft.com/powershell/exchange/recipientfilter-properties).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).
- You can't use a wildcard as the first character. For example, `'Sales*'` is allowed, but `'*Sales'` isn't allowed.

For more information, see [Choose the domain to use when creating Microsoft 365 Groups](https://learn.microsoft.com/microsoft-365/admin/create-groups/choose-domain-to-create-groups).

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

You can only use this parameter in Exchange Online PowerShell with the IncludeUnifiedGroupRecipients switch.

```yaml
Type: String
Parameter Sets: AllTemplatesForUnifiedGroupRecipientsFilter, SMTPTemplateForUnifiedGroupRecipientsFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Priority parameter specifies the order that the email address policies are evaluated. By default, every time that you add a new email address policy, the policy is assigned a priority of N+1, where N is the number of email address policies that you've created.

If you set this parameter to a value that's the same as another email address policy, the priority of the policy that you added first is incremented by 1.

**Note**: The first email address policy that identifies a recipient configures the recipient's email addresses. All other policies are ignored, even if the first policy is unapplied and can't configure the recipient's email addresses.

```yaml
Type: EmailAddressPolicyPriority
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientContainer

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
