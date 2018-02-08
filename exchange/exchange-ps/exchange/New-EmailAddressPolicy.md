---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# New-EmailAddressPolicy

## SYNOPSIS
!!! Exchange Server 2010

Use the New-EmailAddressPolicy cmdlet to create an e-mail address policy.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the New-EmailAddressPolicy cmdlet to create an email address policy.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-EmailAddressPolicy cmdlet to create email address policies.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
New-EmailAddressPolicy [-Name] <String> -EnabledEmailAddressTemplates <ProxyAddressTemplateCollection>
 -RecipientFilter <String> [-Confirm] [-DisabledEmailAddressTemplates <ProxyAddressTemplateCollection>]
 [-DomainController <Fqdn>] [-Organization <OrganizationIdParameter>] [-Priority <EmailAddressPolicyPriority>]
 [-RecipientContainer <OrganizationalUnitIdParameter>] [-WhatIf] -EnabledPrimarySMTPAddressTemplate <String>
 [<CommonParameters>]
```

### Set4
```
New-EmailAddressPolicy [-Name] <String> -EnabledEmailAddressTemplates <ProxyAddressTemplateCollection>
 -IncludedRecipients <None | MailboxUsers | Resources | MailContacts | MailGroups | MailUsers | AllRecipients>
 [-ConditionalCompany <MultiValuedProperty>] [-ConditionalCustomAttribute1 <MultiValuedProperty>]
 [-ConditionalCustomAttribute10 <MultiValuedProperty>] [-ConditionalCustomAttribute11 <MultiValuedProperty>]
 [-ConditionalCustomAttribute12 <MultiValuedProperty>] [-ConditionalCustomAttribute13 <MultiValuedProperty>]
 [-ConditionalCustomAttribute14 <MultiValuedProperty>] [-ConditionalCustomAttribute15 <MultiValuedProperty>]
 [-ConditionalCustomAttribute2 <MultiValuedProperty>] [-ConditionalCustomAttribute3 <MultiValuedProperty>]
 [-ConditionalCustomAttribute4 <MultiValuedProperty>] [-ConditionalCustomAttribute5 <MultiValuedProperty>]
 [-ConditionalCustomAttribute6 <MultiValuedProperty>] [-ConditionalCustomAttribute7 <MultiValuedProperty>]
 [-ConditionalCustomAttribute8 <MultiValuedProperty>] [-ConditionalCustomAttribute9 <MultiValuedProperty>]
 [-ConditionalDepartment <MultiValuedProperty>] [-ConditionalStateOrProvince <MultiValuedProperty>] [-Confirm]
 [-DisabledEmailAddressTemplates <ProxyAddressTemplateCollection>] [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>] [-Priority <EmailAddressPolicyPriority>]
 [-RecipientContainer <OrganizationalUnitIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
New-EmailAddressPolicy [-Name] <String> -EnabledPrimarySMTPAddressTemplate <String>
 -IncludedRecipients <None | MailboxUsers | Resources | MailContacts | MailGroups | MailUsers | AllRecipients>
 [-ConditionalCompany <MultiValuedProperty>] [-ConditionalCustomAttribute1 <MultiValuedProperty>]
 [-ConditionalCustomAttribute10 <MultiValuedProperty>] [-ConditionalCustomAttribute11 <MultiValuedProperty>]
 [-ConditionalCustomAttribute12 <MultiValuedProperty>] [-ConditionalCustomAttribute13 <MultiValuedProperty>]
 [-ConditionalCustomAttribute14 <MultiValuedProperty>] [-ConditionalCustomAttribute15 <MultiValuedProperty>]
 [-ConditionalCustomAttribute2 <MultiValuedProperty>] [-ConditionalCustomAttribute3 <MultiValuedProperty>]
 [-ConditionalCustomAttribute4 <MultiValuedProperty>] [-ConditionalCustomAttribute5 <MultiValuedProperty>]
 [-ConditionalCustomAttribute6 <MultiValuedProperty>] [-ConditionalCustomAttribute7 <MultiValuedProperty>]
 [-ConditionalCustomAttribute8 <MultiValuedProperty>] [-ConditionalCustomAttribute9 <MultiValuedProperty>]
 [-ConditionalDepartment <MultiValuedProperty>] [-ConditionalStateOrProvince <MultiValuedProperty>] [-Confirm]
 [-DomainController <Fqdn>] [-Organization <OrganizationIdParameter>] [-Priority <EmailAddressPolicyPriority>]
 [-RecipientContainer <OrganizationalUnitIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set3
```
New-EmailAddressPolicy [-Name] <String> -EnabledPrimarySMTPAddressTemplate <String> -RecipientFilter <String>
 [-Confirm] [-DomainController <Fqdn>] [-Organization <OrganizationIdParameter>]
 [-Priority <EmailAddressPolicyPriority>] [-RecipientContainer <OrganizationalUnitIdParameter>] [-WhatIf]
 -EnabledEmailAddressTemplates <ProxyAddressTemplateCollection>
 [-DisabledEmailAddressTemplates <ProxyAddressTemplateCollection>] [<CommonParameters>]
```

### Set6
```
New-EmailAddressPolicy [-Name] <String> -EnabledEmailAddressTemplates <ProxyAddressTemplateCollection>
 [-IncludeUnifiedGroupRecipients] [-Confirm] [-DisabledEmailAddressTemplates <ProxyAddressTemplateCollection>]
 [-DomainController <Fqdn>] [-ManagedByFilter <String>] [-Priority <EmailAddressPolicyPriority>]
 [-RecipientContainer <OrganizationalUnitIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set5
```
New-EmailAddressPolicy [-Name] <String> -EnabledPrimarySMTPAddressTemplate <String>
 [-IncludeUnifiedGroupRecipients] [-Confirm] [-DomainController <Fqdn>] [-ManagedByFilter <String>]
 [-Priority <EmailAddressPolicyPriority>] [-RecipientContainer <OrganizationalUnitIdParameter>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "E-mail address policies" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Email address policies" entry in the Email address and address book permissions topic.

!!! Exchange Server 2016, Exchange Online

After you use the New-EmailAddressPolicy cmdlet to create an email address policy in an on-premises Exchange organization, you need to use the Update-EmailAddressPolicy cmdlet to apply the new policy to recipients.

The Conditional parameters that are used with the IncludedRecipients parameter are subject to the following limitations:

- The EQV operator is used for every property value, as in "Department equals Sales". Wildcards and partial matches aren't supported.

- The OR operator is always used for multiple values of the same property, as in "Department equals Sales OR Marketing".

- The AND operator is always used for multiple properties, as in "Department equals Sales AND Company equals Contoso".

To create flexible filters that use any available recipient property and that aren't subject to these limitations, you can use the RecipientFilter parameter to create an OPath filter.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
New-EmailAddressPolicy -Name "southeast offices" -IncludedRecipients UserMailbox -ConditionalStateorProvince "Georgia","Alabama","Louisiana" -EnabledEmailAddressTemplates "SMTP:%s%2g@southeast.contoso.com"
```

This example creates an e-mail address policy that includes mailbox users in the southeast offices who have e-mail addresses that include their last name combined with the first two letters of their first name.

### Example 1 -------------------------- (Exchange Server 2013)
```
New-EmailAddressPolicy -Name "southeast offices" -IncludedRecipients UserMailbox -ConditionalStateOrProvince "Georgia","Alabama","Louisiana" -EnabledEmailAddressTemplates "SMTP:%s%2g@southeast.contoso.com"
```

This example creates an email address policy that includes mailbox users in the southeast offices who have email addresses that include their last name combined with the first two letters of their first name.

### Example 1 -------------------------- (Exchange Server 2016)
```
New-EmailAddressPolicy -Name "Southeast Offices" -IncludedRecipients MailboxUsers -ConditionalStateorProvince "GA","AL","LA" -EnabledEmailAddressTemplates "SMTP:%s%2g@southeast.contoso.com","smtp:%s%2g@southeast.contoso.net"
```

This example creates an email address policy in an on-premises Exchange organization that uses a precanned recipient filter:


Name: Southeast Offices

Precanned recipient filter: All users with mailboxes where the State or province value is GA, AL, or LA (Georgia, Alabama, or Louisiana).

Primary SMTP email address:\<last name\>.\<first two letters of the first name\>@contoso.com

Additional proxy email addresses:\<last name\>.\<first two letters of the first name\>@contoso.net

Priority:N+1, where N is the number of manually created email address policies that already exist (we didn't use the Priority parameter, and the default value is N+1).

### Example 1 -------------------------- (Exchange Online)
```
New-EmailAddressPolicy -Name "Southeast Offices" -IncludedRecipients MailboxUsers -ConditionalStateorProvince "GA","AL","LA" -EnabledEmailAddressTemplates "SMTP:%s%2g@southeast.contoso.com","smtp:%s%2g@southeast.contoso.net"
```

This example creates an email address policy in an on-premises Exchange organization that uses a precanned recipient filter:


Name: Southeast Offices

Precanned recipient filter: All users with mailboxes where the State or province value is GA, AL, or LA (Georgia, Alabama, or Louisiana).

Primary SMTP email address:\<last name\>.\<first two letters of the first name\>@contoso.com

Additional proxy email addresses:\<last name\>.\<first two letters of the first name\>@contoso.net

Priority:N+1, where N is the number of manually created email address policies that already exist (we didn't use the Priority parameter, and the default value is N+1).

### Example 2 -------------------------- (Exchange Server 2016)
```
New-EmailAddressPolicy -Name "Northwest Executives" -RecipientFilter {(RecipientType -eq 'UserMailbox') -and (Title -like '*Director*' -or Title -like '*Manager*') -and (StateOrProvince -eq 'WA' -or StateOrProvince -eq 'OR' -or StateOrProvince -eq 'ID')} -EnabledEmailAddressTemplates "SMTP:%2g%s@contoso.com" -Priority 2
```

This example creates an email address policy in an on-premises Exchange organization that uses a custom recipient filter:


Name: Northwest Executives

Custom recipient filter: All users with mailboxes where the Title value contains Director or Manager, and the State or province value is WA, OR, or ID (Washington, Oregon, or Idaho).

Primary SMTP email address:\<first two letters of the first name\>\<last name\>@contoso.com

Additional proxy email addresses: None

Priority: 2

### Example 2 -------------------------- (Exchange Online)
```
New-EmailAddressPolicy -Name "Northwest Executives" -RecipientFilter {(RecipientType -eq 'UserMailbox') -and (Title -like '*Director*' -or Title -like '*Manager*') -and (StateOrProvince -eq 'WA' -or StateOrProvince -eq 'OR' -or StateOrProvince -eq 'ID')} -EnabledEmailAddressTemplates "SMTP:%2g%s@contoso.com" -Priority 2
```

This example creates an email address policy in an on-premises Exchange organization that uses a custom recipient filter:


Name: Northwest Executives

Custom recipient filter: All users with mailboxes where the Title value contains Director or Manager, and the State or province value is WA, OR, or ID (Washington, Oregon, or Idaho).

Primary SMTP email address:\<first two letters of the first name\>\<last name\>@contoso.com

Additional proxy email addresses: None

Priority: 2

## PARAMETERS

### -EnabledEmailAddressTemplates
!!! Exchange Server 2010

The EnabledEmailAddressTemplates parameter specifies the proxy addresses that are included in an e-mail address policy and are enabled. Separate multiple values with commas. The domain part of each proxy address needs to match an existing accepted domain.



!!! Exchange Server 2013

The EnabledEmailAddressTemplates parameter specifies the proxy addresses included in an email address policy and are enabled. Separate multiple values with commas. The domain part of each proxy address needs to match an existing accepted domain.



!!! Exchange Server 2016, Exchange Online

The EnabledEmailAddressTemplates parameter specifies the rules in the email address policy that are used to generate email addresses for recipients.

Valid syntax for this parameter is \<Type\>:\<AddressFormat\>:

- \<Type\>: A valid email address type as described in "Address types" section in Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx). For example, SMTP for the primary email address, and smtp for proxy addresses.

- \<AddressFormat\>: For SMTP email addresses, a domain or subdomain that's configured as accepted domain (authoritative or internal relay), and valid variables and ASCII text characters as described in the "Address formats" section in Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx). For example: \<alias\>@contoso.com requires the value %m@contoso.com, and \<firstname\>.\<lastname\>@contoso.com requires the value %g.%s@contoso.com.

This parameter requires at least one template with the \<Type\> value SMTP (to define the primary SMTP email address). After that, if you don't include a \<Type\> prefix for a template, the value smtp (an SMTP proxy address) is assumed.

You can specify multiple email address templates separated by commas: "SMTP:\<PrimarySMTPEmailAddress\>","[\<Type1\>]:\<EmailAddress1\>","[\<Type2\>]:\<EmailAddress2\>"....

You can't use this parameter with the EnabledPrimarySMTPAddressTemplate parameter.

In Office 365, if you use this parameter with the IncludeUnifiedGroupRecipients, you can't use variables in the email address template.



```yaml
Type: ProxyAddressTemplateCollection
Parameter Sets: Set2, Set4, Set3, Set6
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnabledPrimarySMTPAddressTemplate
!!! Exchange Server 2010

The EnabledPrimarySMTPAddressTemplate parameter specifies the proxy address enabled and included in an e-mail address policy. The domain part of each proxy address needs to match an existing accepted domain.



!!! Exchange Server 2013

The EnabledPrimarySMTPAddressTemplate parameter specifies the proxy address enabled and included in an email address policy. The domain part of each proxy address needs to match an existing accepted domain.



!!! Exchange Server 2016, Exchange Online

The EnabledPrimarySMTPAddressTemplate parameter specifies the specifies the rule in the email address policy that's used to generate the primary SMTP email addresses for recipients. You can use this parameter instead of the EnabledEmailAddressTemplates if the policy only applies the primary email address and no additional proxy addresses.

Valid syntax for this parameter is a domain or subdomain that's configured as an authoritative accepted domain, and valid variables and ASCII text characters as described in the "Address format" section in Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx). For example: \<alias\>@contoso.com requires the value %m@contoso.com, and \<firstname\>.\<lastname\>@contoso.com requires the value %g.%s@contoso.com.

You can't use this parameter with the EnabledEmailAddressTemplates parameter.

In Office 365, if you use this parameter with the IncludeUnifiedGroupRecipients, you can't use variables in the email address template.



```yaml
Type: String
Parameter Sets: Set2, Set1, Set3, Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludedRecipients
!!! Exchange Server 2010

The IncludedRecipients parameter specifies how to filter recipients used to set the e-mail address policy. The AllRecipients value can be used only by itself. When multiple values of the IncludedRecipients parameter are separated by commas, the OR Boolean operator is applied.



!!! Exchange Server 2013

The IncludedRecipients parameter specifies how to filter recipients used to set the email address policy. The AllRecipients value can be used only by itself. When multiple values of the IncludedRecipients parameter are separated by commas, the OR Boolean operator is applied.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The IncludedRecipients parameter specifies a filter that's based on the recipient type. Valid values are:

- AllRecipients: This value can be used only by itself.

- MailboxUsers

- MailContacts

- MailGroups

- MailUsers

- Resources: This value indicates room or equipment mailboxes.

You can specify multiple values separated by commas. When you use multiple values, the OR Boolean operator is applied.

You need to use this parameter when you use any of the Conditional parameters. You can't use this parameter with the RecipientFilter parameter.



```yaml
Type: None | MailboxUsers | Resources | MailContacts | MailGroups | MailUsers | AllRecipients
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
!!! Exchange Server 2010

The Name parameter specifies the name of the e-mail address policy.



!!! Exchange Server 2013

The Name parameter specifies the name of the email address policy.



!!! Exchange Server 2016, Exchange Online

The Name parameter specifies the unique name of the email address policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientFilter
!!! Exchange Server 2010

The RecipientFilter parameter specifies a filter for recipients to include in the e-mail address policy. You can't use this parameter if you use any of the following filter parameters:

- ConditionalCompany

- ConditionalDepartment

- IncludedRecipients

- ConditionalStateOrProvince

For more information about the filterable properties, see Filterable Properties for the -RecipientFilter Parameter.



!!! Exchange Server 2013

The RecipientFilter parameter specifies a filter for recipients to include in the email address policy. You can't use this parameter if you use any of the following filter parameters:

- ConditionalCompany

- ConditionalDepartment

- IncludedRecipients

- ConditionalStateOrProvince





!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The RecipientFilter parameter specifies an OPath filter that's based on the value of any available recipient property. You can use any available Windows PowerShell operator, and wildcards and partial matches are supported. When you use this parameter, remember the following OPath filter rules:

- Use braces { } around the whole OPath syntax string.

- Include a hyphen before all operators.

- In cloud-based environments, you can't use a wildcard as the first character. For example, Sales\* is allowed, but \*Sales isn't allowed.

For more information, see Filterable properties for the -RecipientFilter parameter (https://technet.microsoft.com/library/bb738157.aspx).

You can't use this parameter with the IncludedRecipients parameter or any of the Conditional parameters.



```yaml
Type: String
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCompany
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCompany parameter specifies a filter by company. It takes multiple values as a comma-delimited list.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The ConditionalCompany parameter specifies a filter that's based on the value of the recipient's Company property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute1
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute10
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute11
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute12
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute13
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute14
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute15
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute2
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute3
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute4
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute5
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute6
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter is available only in on-premises Exchange.

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute7
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute8
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute9
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalDepartment
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalDepartment parameter specifies a filter by department. It takes multiple values as a comma-delimited list.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The ConditionalDepartment parameter specifies a filter that's based on the value of the recipient's Department property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalStateOrProvince
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalStateOrProvince parameter specifies a filter by state or province. It takes multiple values as a comma-delimited list.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The ConditionalStateOrProvince parameter specifies a filter that's based on the value of the recipient's StateOrProvince property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set4, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisabledEmailAddressTemplates
!!! Exchange Server 2010

The DisabledEmailAddressTemplates parameter specifies the proxy addresses that are included in an e-mail address policy and are disabled. It takes multiple values as a comma-delimited list.



!!! Exchange Server 2013

The DisabledEmailAddressTemplates parameter specifies the proxy addresses included in an email address policy and are disabled. It takes multiple values as a comma-delimited list.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DisabledEmailAddressTemplates parameter specifies the proxy email addresses templates that are included in an email address policy, but aren't used to configure the email addresses of recipients.

Valid syntax for this parameter is \<Type\>:\<AddressFormat\>:

- \<Type\>: A valid email address type as described in the "Address types" section in Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx). For example, smtp or X400. Note that you can't use SMTP to specify a disabled primary SMTP email address.

- \<AddressFormat\>: For SMTP email addresses, a domain or subdomain that's configured as accepted domain (authoritative or internal relay), and valid variables and ASCII text characters as described in the "Address formats" section in Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx). For example: \<alias\>@contoso.com requires the value %m@contoso.com, and \<firstname\>.\<lastname\>@contoso.com requires the value %g.%s@contoso.com.

You can specify multiple disabled email address templates separated by commas: "[\<Type1\>]:\<EmailAddress1\>","[\<Type2\>]:\<EmailAddress2\>"....



```yaml
Type: ProxyAddressTemplateCollection
Parameter Sets: Set2, Set4, Set3, Set6
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010, Exchange Server 2013

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.

```yaml
Type: OrganizationIdParameter
Parameter Sets: Set2, Set4, Set1, Set3
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
!!! Exchange Server 2010, Exchange Server 2013

The Priority parameter specifies that the current priority is higher than the priority specified as an argument for this parameter.



!!! Exchange Server 2016, Exchange Online

The Priority parameter specifies the order that the email address policies are evaluated. By default, every time that you add a new email address policy, the policy is assigned a priority of N+1, where N is the number of email address policies that you've created.

If you set this parameter to a value that's the same as another email address policy, the priority of the policy that you added first is incremented by 1.

Note: The first email address policy that identifies a recipient configures the recipient's email addresses. All other policies are ignored, even if the first policy is unapplied and can't configure the recipient's email addresses.



```yaml
Type: EmailAddressPolicyPriority
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientContainer
!!! Exchange Server 2010

The RecipientContainer parameter specifies how to filter the recipients used to build the e-mail address policies based on their location in Active Directory Domain Services (AD DS). The value of the RecipientContainer parameter can be the canonical name of an organizational unit (OU) or a domain. If you don't specify a value for the RecipientContainer parameter, the default search filter is the location of the dynamic distribution group in AD DS.



!!! Exchange Server 2013

The RecipientContainer parameter specifies how to filter the recipients used to build the email address policies based on their location in Active Directory Domain Services (AD DS). The value of the RecipientContainer parameter can be the canonical name of an organizational unit (OU) or a domain. If you don't specify a value for the RecipientContainer parameter, the default search filter is the location of the dynamic distribution group in AD DS.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The RecipientContainer parameter specifies a filter that's based on the recipient's location in Active Directory. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

If you don't use this parameter, the default value is the OU where the object was created.



```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeUnifiedGroupRecipients
This parameter is available only in the cloud-based service.

The IncludeUnifiedGroupRecipients switch specifies that the email address policy applies to Office 365 groups. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set6, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedByFilter
This parameter is available only in the cloud-based service.

The ManagedByFilter parameter specifies the email address policies to apply to Office 365 groups based on the properties of the users who create the Office 365 groups.

This parameter is an OPath filter that's based on the value of any available recipient property (for example, {Department -eq 'Sales'}). You can use any available Windows PowerShell operator, and wildcards and partial matches are supported. When you use this parameter, remember the following OPath filter rules:

- Use braces { } around the whole OPath syntax string.

- Include a hyphen before all operators.

- You can't use a wildcard as the first character. For example, Sales\* is allowed, but \*Sales isn't allowed.

For more information, see Multi-domain support for Office 365 groups - Admin help (https://go.microsoft.com/fwlink/p/?linkid=838413).

For a list of the filterable properties, see Filterable properties for the -RecipientFilter parameter.

You need to use this parameter with the IncludeUnifiedGroupRecipients switch.

```yaml
Type: String
Parameter Sets: Set6, Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/23b6e364-b56e-4c5a-bc71-ff5652d7e42b.aspx)

