---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# New-DynamicDistributionGroup

## SYNOPSIS
!!! Exchange Server 2010

Use the New-DynamicDistributionGroup cmdlet to create a dynamic distribution group.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-DynamicDistributionGroup cmdlet to create a dynamic distribution group.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-DynamicDistributionGroup cmdlet to create dynamic distribution groups. A dynamic distribution group queries mail-enabled objects and builds the group membership based on the results. The group membership is recalculated whenever an email message is sent to the group.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
New-DynamicDistributionGroup [-Name] <String>
 -IncludedRecipients <None | MailboxUsers | Resources | MailContacts | MailGroups | MailUsers | AllRecipients>
 [-Alias <String>] [-ArbitrationMailbox <MailboxIdParameter>] [-ConditionalCompany <MultiValuedProperty>]
 [-ConditionalCustomAttribute1 <MultiValuedProperty>] [-ConditionalCustomAttribute10 <MultiValuedProperty>]
 [-ConditionalCustomAttribute11 <MultiValuedProperty>] [-ConditionalCustomAttribute12 <MultiValuedProperty>]
 [-ConditionalCustomAttribute13 <MultiValuedProperty>] [-ConditionalCustomAttribute14 <MultiValuedProperty>]
 [-ConditionalCustomAttribute15 <MultiValuedProperty>] [-ConditionalCustomAttribute2 <MultiValuedProperty>]
 [-ConditionalCustomAttribute3 <MultiValuedProperty>] [-ConditionalCustomAttribute4 <MultiValuedProperty>]
 [-ConditionalCustomAttribute5 <MultiValuedProperty>] [-ConditionalCustomAttribute6 <MultiValuedProperty>]
 [-ConditionalCustomAttribute7 <MultiValuedProperty>] [-ConditionalCustomAttribute8 <MultiValuedProperty>]
 [-ConditionalCustomAttribute9 <MultiValuedProperty>] [-ConditionalDepartment <MultiValuedProperty>]
 [-ConditionalStateOrProvince <MultiValuedProperty>] [-Confirm] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-OverrideRecipientQuotas] [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientContainer <OrganizationalUnitIdParameter>]
 [-SendModerationNotifications <Never | Internal | Always>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
New-DynamicDistributionGroup [-Name] <String> -RecipientFilter <String> [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Confirm] [-DisplayName <String>] [-DomainController <Fqdn>]
 [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-OverrideRecipientQuotas] [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientContainer <OrganizationalUnitIdParameter>]
 [-SendModerationNotifications <Never | Internal | Always>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

A dynamic distribution group queries Active Directory mail-enabled objects and builds the group membership based on the results. The group membership is recalculated whenever an e-mail message is sent to the group. The query filters provided with Microsoft Exchange are limited to any combination of the following parameters:

- ConditionalCompany

- ConditionalCustomAttributeN (where N is a value from 1 through 15)

- ConditionalDepartment

- ConditionalStateOrProvince

- IncludedRecipients

You can also create any custom query using the RecipientFilter parameter.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Dynamic distribution groups" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

A dynamic distribution group queries Active Directory mail-enabled objects and builds the group membership based on the results. The group membership is recalculated whenever an email message is sent to the group. The query filters provided with Microsoft Exchange are limited to any combination of the following parameters:

- ConditionalCompany

- ConditionalCustomAttributeN (where N is a value from 1 through 15)

- ConditionalDepartment

- ConditionalStateOrProvince

- IncludedRecipients

You can also create any custom query using the RecipientFilter parameter.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Dynamic distribution groups" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

The Conditional parameters that are used with the IncludedRecipients parameter are subject to the following limitations:

- The EQV operator is used for every property value, as in "Department equals Sales". Wildcards and partial matches aren't supported.

- The OR operator is always used for multiple values of the same property, as in "Department equals Sales OR Marketing".

- The AND operator is always used for multiple properties, as in "Department equals Sales AND Company equals Contoso".

To create flexible filters that use any available recipient property and that aren't subject to these limitations, you can use the RecipientFilter parameter to create an OPath filter.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
New-DynamicDistributionGroup -Name "Marketing Group" -Alias "Marketing_Group" -IncludedRecipients "MailboxUsers,MailContacts" -OrganizationalUnit "contoso.com/Users" -ConditionalDepartment "Marketing","Sales" -RecipientContainer "contoso.com"
```

This example creates the dynamic distribution group Marketing Group in the Users container in the contoso.com domain. The Marketing Group dynamic distribution group contains all mailbox users or mail-enabled contacts found anywhere in the contoso.com domain who have a Department field that equals the strings "Marketing" or "Sales".

### Example 1 -------------------------- (Exchange Server 2013)
```
New-DynamicDistributionGroup -Name "Marketing Group" -Alias "Marketing_Group" -IncludedRecipients "MailboxUsers,MailContacts" -OrganizationalUnit "contoso.com/Users" -ConditionalDepartment "Marketing","Sales" -RecipientContainer "contoso.com"
```

This example creates the dynamic distribution group Marketing Group in the Users container in the contoso.com domain. The Marketing Group dynamic distribution group contains all mailbox users or mail-enabled contacts found anywhere in the contoso.com domain who have a Department field that equals the strings "Marketing" or "Sales". Because we didn't use the OrganizationalUnit or RecipientContainer parameters, the group looks for recipients in the default location (typically, the Users container).

### Example 1 -------------------------- (Exchange Server 2016)
```
New-DynamicDistributionGroup -Name "Marketing Group" -IncludedRecipients "MailboxUsers,MailContacts" -ConditionalDepartment "Marketing","Sales"
```

This example creates a dynamic distribution group named Marketing Group that contains all recipients who have a Department field that equals the strings "Marketing" or "Sales". Because we didn't use the OrganizationalUnit or RecipientContainer parameters, the group looks for recipients in the default location (typically, the Users container).

### Example 1 -------------------------- (Exchange Online)
```
New-DynamicDistributionGroup -Name "Marketing Group" -IncludedRecipients "MailboxUsers,MailContacts" -ConditionalDepartment "Marketing","Sales"
```

This example creates a dynamic distribution group named Marketing Group that contains all recipients who have a Department field that equals the strings "Marketing" or "Sales". Because we didn't use the OrganizationalUnit or RecipientContainer parameters, the group looks for recipients in the default location (typically, the Users container).

### Example 2 -------------------------- (Exchange Server 2010)
```
New-DynamicDistributionGroup -Name "Pacific Northwest" -Alias "Pacific_Northwest" -OrganizationalUnit "contoso.com/Users" -RecipientFilter {((RecipientType -eq 'UserMailbox') -and ((StateOrProvince -eq 'Washington' -or StateOrProvince -eq 'Oregon')))} -RecipientContainer "contoso.com"
```

This example uses the RecipientFilter parameter to create the dynamic distribution group Pacific Northwest in the Users container in the contoso.com domain. The Pacific Northwest dynamic distribution group contains all mailbox users found anywhere in the contoso.com domain who have a State/Province field that equals "Washington" or "Oregon".

### Example 2 -------------------------- (Exchange Server 2013)
```
New-DynamicDistributionGroup -Name "Pacific Northwest" -Alias "Pacific_Northwest" -OrganizationalUnit "contoso.com/Users" -RecipientFilter {((RecipientType -eq 'UserMailbox') -and ((StateOrProvince -eq 'Washington' -or StateOrProvince -eq 'Oregon')))} -RecipientContainer "contoso.com"
```

This example uses the RecipientFilter parameter to create the dynamic distribution group Pacific Northwest in the Users container in the contoso.com domain. The Pacific Northwest dynamic distribution group contains all mailbox users found anywhere in the contoso.com domain who have a State/Province field that equals "Washington" or "Oregon".

### Example 2 -------------------------- (Exchange Server 2016)
```
New-DynamicDistributionGroup -Name "Washington Management Team" -RecipientFilter {(RecipientType -eq 'UserMailbox') -and (Title -like 'Director*' -or Title -like 'Manager*') -and (StateOrProvince -eq 'WA')} -RecipientContainer "North America"
```

This example creates a dynamic distribution group named Washington Management Team that contains all users in the organizational unit named North America from Washington State whose titles start with "Director" or "Manager".

### Example 2 -------------------------- (Exchange Online)
```
New-DynamicDistributionGroup -Name "Washington Management Team" -RecipientFilter {(RecipientType -eq 'UserMailbox') -and (Title -like 'Director*' -or Title -like 'Manager*') -and (StateOrProvince -eq 'WA')} -RecipientContainer "North America"
```

This example creates a dynamic distribution group named Washington Management Team that contains all users in the organizational unit named North America from Washington State whose titles start with "Director" or "Manager".

## PARAMETERS

### -IncludedRecipients
!!! Exchange Server 2010, Exchange Server 2013

The IncludedRecipients parameter filters the recipient types used to build the dynamic distribution group. The IncludedRecipients parameter can't be used if the RecipientFilter parameter is specified. You can use the following values:

- AllRecipients

- MailboxUsers

- Resources

- MailContacts

- MailGroups

- MailUsers

- None

AllRecipients can be used only by itself. When multiple values in the IncludedRecipients parameter are separated by commas, the OR Boolean operator is applied.



!!! Exchange Server 2016, Exchange Online

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
Parameter Sets: Set1
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

The Name parameter specifies the name of the dynamic distribution group. If the DisplayName parameter isn't specified, the value of the Name parameter is also used for the DisplayName parameter.

The Name parameter value can't exceed 64 characters.

If the values of the Name and DisplayName parameters are different:

- The Name parameter specifies the dynamic distribution group name in Active Directory Users and Computers and also in the Group Name field in the Exchange Management Console.

- The DisplayName parameter specifies the dynamic distribution group name in the Exchange Management Console and in the Exchange global address list (GAL).



!!! Exchange Server 2013

The Name parameter specifies the name of the dynamic distribution group. If the DisplayName parameter isn't specified, the value of the Name parameter is also used for the DisplayName parameter.

The Name parameter value can't exceed 64 characters.

If the values of the Name and DisplayName parameters are different:

- The Name parameter specifies the dynamic distribution group name in Active Directory Users and Computers.

- The DisplayName parameter specifies the dynamic distribution group name in the Exchange Administration Center and in the Exchange global address list (GAL).



!!! Exchange Server 2016, Exchange Online

The Name parameter specifies the unique name of the dynamic distribution group. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

This value is also used for the DisplayName property if you don't use the DisplayName parameter.



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

The RecipientFilter parameter filters the mail-enabled recipients used to build the dynamic distribution group. The RecipientFilter parameter can't be used if any of the following parameters are specified:

- IncludedRecipients

- ConditionalCompany

- ConditionalCustomAttributeN (where N is a value from 1 through 15)

- ConditionalDepartment

- ConditionalStateOrProvince

The RecipientFilter parameter uses OPath syntax to query Active Directory and filter recipients.

For more information about the filterable properties, see Filterable Properties for the -RecipientFilter Parameter.



!!! Exchange Server 2013

The RecipientFilter parameter filters the mail-enabled recipients used to build the dynamic distribution group. The RecipientFilter parameter can't be used if any of the following parameters are specified:

- IncludedRecipients

- ConditionalCompany

- ConditionalCustomAttributeN (where N is a value from 1 through 15)

- ConditionalDepartment

- ConditionalStateOrProvince

The RecipientFilter parameter uses OPath syntax to query Active Directory and filter recipients.



!!! Exchange Server 2016, Exchange Online

The RecipientFilter parameter specifies an OPath filter that's based on the value of any available recipient property. You can use any available Windows PowerShell operator, and wildcards and partial matches are supported. When you use this parameter, remember the following OPath filter rules:

- Use braces { } around the whole OPath syntax string.

- Include a hyphen before all operators.

- In cloud-based environments, you can't use a wildcard as the first character. For example, Sales\* is allowed, but \*Sales isn't allowed.

For more information, see Filterable properties for the -RecipientFilter parameter (https://technet.microsoft.com/library/bb738157.aspx).

You can't use this parameter with the IncludedRecipients parameter or any of the Conditional parameters.



```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
!!! Exchange Server 2010

The Alias parameter specifies the alias of the dynamic distribution group. The value of the Alias parameter is used to generate the primary SMTP e-mail address for the dynamic distribution group. The value of the Alias parameter can't contain spaces. If the Alias parameter isn't specified, the value of the Name parameter is used for the value of the Alias parameter, with any spaces in the Name parameter converted to underscore characters (\_).



!!! Exchange Server 2013

The Alias parameter specifies the alias of the dynamic distribution group. The value of the Alias parameter is used to generate the primary SMTP email address for the dynamic distribution group. The value of the Alias parameter can't contain spaces. If the Alias parameter isn't specified, the value of the Name parameter is used for the value of the Alias parameter, with any spaces in the Name parameter converted to underscore characters (\_).



!!! Exchange Server 2016, Exchange Online

The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', \*, +, -, /, =, ?, ^, \_, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (\<alias\>@\<domain\>). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.com results in the Alias property value helpdesk.

- Recipeints without user accounts (for example, room mailboxes, mail contacts, and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in on-premises environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

The Alias parameter never generates or updates the primary email address of a mail contact or a mail user.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArbitrationMailbox
!!! Exchange Server 2010

The ArbitrationMailbox parameter specifies the mailbox used to manage the moderation process.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ArbitrationMailbox parameter specifies the mailbox used to manage the moderation process.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The ArbitrationMailbox parameter specifies the arbitration mailbox that's used to manage the moderation process for this recipient. You can use any value that uniquely identifies the arbitration mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)



```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCompany
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCompany parameter filters the mailbox users or mail-enabled contacts used to build the dynamic distribution group.

When multiple values of the ConditionalCompany parameter are separated by commas, the OR Boolean operator is applied.



!!! Exchange Server 2016, Exchange Online

The ConditionalCompany parameter specifies a filter that's based on the value of the recipient's Company property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

The ConditionalDepartment parameter filters the mailbox users or mail-enabled contacts used to build the dynamic distribution group. The ConditionalDepartment parameter can't be used if the RecipientFilter parameter is specified.

When multiple values of the ConditionalDepartment parameter are separated by commas, the OR Boolean operator is applied.



!!! Exchange Server 2016, Exchange Online

The ConditionalDepartment parameter specifies a filter that's based on the value of the recipient's Department property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

The ConditionalStateOrProvince parameter filters mailbox users or mail-enabled contacts used to build the dynamic distribution group. The ConditionalStateOrProvince parameter can't be used if the RecipientFilter parameter is specified.

When multiple values of the ConditionalStateOrProvince parameter are separated by commas, the OR Boolean operator is applied.



!!! Exchange Server 2016, Exchange Online

The ConditionalStateOrProvince parameter specifies a filter that's based on the value of the recipient's StateOrProvince property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
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

### -DisplayName
!!! Exchange Server 2010

The DisplayName parameter specifies the name of the dynamic distribution group in the Exchange Management Console and in the Exchange GAL. If the DisplayName parameter isn't specified, the value of the Name parameter is used for the DisplayName parameter.



!!! Exchange Server 2013

The DisplayName parameter specifies the name of the dynamic distribution group in the Exchange Administration Center and in the Exchange GAL. If the DisplayName parameter isn't specified, the value of the Name parameter is used for the DisplayName parameter.



!!! Exchange Server 2016, Exchange Online

The DisplayName parameter specifies the display name of the dynamic distribution group. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

If you don't use the DisplayName parameter, the value of the Name parameter is used for the display name.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -ModeratedBy
!!! Exchange Server 2010

The ModeratedBy parameter specifies the users who are responsible for moderating the messages sent to this dynamic distribution group. To designate more than one user, separate the users with commas.

This parameter is required if you set the ModerationEnabled parameter to $true. If you leave this parameter blank and there's a user who's already specified as the manager of this dynamic distribution group, the ModeratedBy parameter is automatically set to the ManagedBy parameter of the dynamic distribution group. Otherwise, an error is returned.



!!! Exchange Server 2013

The ModeratedBy parameter specifies the users who are responsible for moderating the messages sent to this dynamic distribution group. To designate more than one user, separate the users with commas.

This parameter is required if you set the ModerationEnabled parameter to $true.



!!! Exchange Server 2016, Exchange Online

The ModeratedBy parameter specifies one or more moderators for this recipient. A moderator approves messages sent to the recipient before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You need to use this parameter to specify at least one moderator when you set the ModerationEnabled parameter to the value $true.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModerationEnabled
!!! Exchange Server 2010, Exchange Server 2013

The ModerationEnabled parameter specifies whether to enable moderation for the dynamic distribution group. To enable moderation, set this parameter to $true. To disable moderation, set this parameter to $false.

The default value is $false.



!!! Exchange Server 2016, Exchange Online

The ModerationEnabled parameter specifies whether moderation is enabled for this recipient. Valid value are:

- $true: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.

- $false: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This is the default value.

You use the ModeratedBy parameter to specify the moderators.



```yaml
Type: $true | $false
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit
!!! Exchange Server 2010

The OrganizationalUnit parameter specifies where to create the dynamic distribution group in Active Directory by using canonical name syntax.



!!! Exchange Server 2013

If you don't use this parameter, the default value is typically the Users container in the domain of the Exchange server that you're connected to (also known as the recipient scope). You can change the recipient scope for the current PowerShell session by using the Set-AdServerSettings cmdlet.

If you don't use the RecipientContainer parameter, the location of the dynamic distribution group is used for the RecipientContainer property (the default location, or the value you specify for the OrganizationalUnit parameter).



!!! Exchange Server 2016, Exchange Online

The OrganizationalUnit parameter specifies the organizational unit (OU) where the dynamic distribution group is created.

Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

If you don't use this parameter, the default value is typically the Users container in the domain of the Exchange server that you're connected to (also known as the recipient scope). You can change the recipient scope for the current PowerShell session by using the Set-AdServerSettings cmdlet.

If you don't use the RecipientContainer parameter, the location of the dynamic distribution group is used for the RecipientContainer property (the default location, or the value you specify for the OrganizationalUnit parameter).



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

### -OverrideRecipientQuotas
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The OverrideRecipientQuotas parameter specifies that the recipient quotas for this group can be overridden. Groups that are part of a tenant organization will use the quotas defined in the tenant organization's service plan. Use this parameter to allow the command to skip the tenant-level recipient quotas check.

Using this parameter doesn't set quotas. You need to define the quotas for the group using the appropriate Set cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
!!! Exchange Server 2010

The PrimarySmtpAddress parameter specifies the primary return SMTP e-mail address for the dynamic distribution group. This parameter has meaning only if the dynamic distribution group has multiple SMTP e-mail addresses.



!!! Exchange Server 2013

The PrimarySmtpAddress parameter specifies the primary return SMTP email address for the dynamic distribution group. This parameter has meaning only if the dynamic distribution group has multiple SMTP email addresses.



!!! Exchange Server 2016, Exchange Online

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.



```yaml
Type: SmtpAddress
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

The RecipientContainer parameter filters the recipients used to build the dynamic distribution group based on their location in Active Directory. The value of the RecipientContainer parameter can be the canonical name of an organizational unit (OU) or a domain. If you don't specify a value for the RecipientContainer parameter, the cmdlet will default to use the local container. This location is specified by using the OrganizationalUnit parameter.



!!! Exchange Server 2013

The RecipientContainer parameter filters the recipients used to build the dynamic distribution group based on their location in Active Directory. The value of the RecipientContainer parameter can be the canonical name of an organizational unit (OU) or a domain. If you don't specify a value for the RecipientContainer parameter, the cmdlet will default to use the local container. This location is specified by using the OrganizationalUnit parameter.

Note that the RecipientContainer property can't be blank. The group is always limited to looking for recipients in a specific location (the value you specify for this parameter, or the location where the group was created).



!!! Exchange Server 2016, Exchange Online

The RecipientContainer parameter specifies a filter that's based on the recipient's location in Active Directory. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

If you don't use this parameter, the default value is the OU where the object was created.

Note that the RecipientContainer property can't be blank. The group is always limited to looking for recipients in a specific location (the value you specify for this parameter, or the location where the group was created).



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

### -SendModerationNotifications
!!! Exchange Server 2010, Exchange Server 2013

The SendModerationNotifications parameter specifies whether status notifications are sent to users when they send a message to the moderated dynamic distribution group. You can specify one of the following values:

- Always

- Internal

- Never

If you want notifications to be sent to all senders, set this parameter to Always.

If you want notifications to be sent only to the senders internal to your organization, set this parameter to Internal.

To disable all status notifications, set this parameter to Never.

Senders are always notified if their message is rejected by the moderators, regardless of the value of this parameter.

The default value is Never.



!!! Exchange Server 2016, Exchange Online

The SendModerationNotifications parameter specifies when moderation notification messages are sent. Valid values are:

- Always: Notify all senders when their messages aren't approved. This is the default value.

- Internal: Notify senders in the organization when their messages aren't approved.

- Never: Don't notify anyone when a message isn't approved.

This parameter is only meaningful when moderation is enabled (the ModerationEnabled parameter has the value $true).



```yaml
Type: Never | Internal | Always
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

[Online Version](https://technet.microsoft.com/library/e9920bd1-06c1-4f75-992f-dd7fc98a5c2b.aspx)

