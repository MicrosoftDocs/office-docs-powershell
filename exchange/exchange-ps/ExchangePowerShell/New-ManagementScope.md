---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-managementscope
schema: 2.0.0
title: New-ManagementScope
---

# New-ManagementScope

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the New-ManagementScope cmdlet to create a regular or exclusive management scope.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### DatabaseList
```
New-ManagementScope [-Name] <String> -DatabaseList <DatabaseIdParameter[]>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Exclusive]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### DatabaseFilter
```
New-ManagementScope [-Name] <String> -DatabaseRestrictionFilter <String>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Exclusive]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### RecipientFilter
```
New-ManagementScope [-Name] <String> -RecipientRestrictionFilter <String>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Exclusive]
 [-Force]
 [-RecipientRoot <OrganizationalUnitIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### ServerList
```
New-ManagementScope [-Name] <String> -ServerList <ServerIdParameter[]>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Exclusive]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### ServerFilter
```
New-ManagementScope [-Name] <String> -ServerRestrictionFilter <String>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Exclusive]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
After you create a regular or exclusive scope, you need to associate the scope with a management role assignment. To associate a scope with a role assignment, use the New-ManagementRoleAssignment cmdlet. For more information about adding new management scopes, see [Create a regular or exclusive scope](https://learn.microsoft.com/exchange/create-a-regular-or-exclusive-scope-exchange-2013-help).

For more information about regular and exclusive scopes, see [Understanding management role scopes](https://learn.microsoft.com/exchange/understanding-management-role-scopes-exchange-2013-help).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-ManagementScope -Name "Mailbox Servers 1 through 3" -ServerList MailboxServer1, MailboxServer2, MailboxServer3
```

This example creates a scope that includes only the servers MailboxServer1, MailboxServer2, and MailboxServer3. Users assigned roles using management role assignments that have the scope in this example can only perform against the servers included in the scope.

### Example 2
```powershell
New-ManagementScope -Name "Redmond Site Scope" -ServerRestrictionFilter "ServerSite -eq 'CN=Redmond,CN=Sites,CN=Configuration,DC=contoso,DC=com'"
```

This example creates the scope named Redmond Site Scope and sets a server restriction filter that matches only the servers located in the "CN=Redmond,CN=Sites,CN=Configuration,DC=contoso,DC=com" Active Directory Domain Services (AD DS) site.

### Example 3
```powershell
New-ManagementScope -Name "Executive Mailboxes" -RecipientRoot "contoso.com/Executives" -RecipientRestrictionFilter "RecipientType -eq 'UserMailbox'"
```

This example creates the Executive Mailboxes scope. Only mailboxes located within the Executives OU in the contoso.com domain match the recipient restriction filter.

### Example 4
```powershell
New-ManagementScope -Name "Protected Exec Users" -RecipientRestrictionFilter "Title -like 'VP*'" -Exclusive

New-ManagementRoleAssignment -SecurityGroup "Executive Administrators" -Role "Mail Recipients" -CustomRecipientWriteScope "Protected Exec Users"
```

This example creates the Protected Exec Users exclusive scope. Users that contain the string "VP" in their title match the recipient filter for the scope. When the exclusive scope is created, all users are immediately blocked from modifying the recipients that match the exclusive scope until the scope is associated with a management role assignment. If other role assignments are associated with other exclusive scopes that match the same recipients, those assignments can still modify the recipients.

The exclusive scope is then associated with a management role assignment that assigns the Mail Recipients management role to the Executive Administrators role group. This role group contains administrators who are allowed to modify the mailboxes of high-profile executives. Only the administrators of the Executive Administrators role group can modify users with the string "VP" in their title.

### Example 5
```powershell
New-ManagementScope -Name "Seattle Databases" -DatabaseRestrictionFilter "Name -Like 'SEA*'"
```

This example creates the Seattle Databases scope and sets a database restriction filter that matches only the databases that begin with the string "SEA".

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The Name parameter specifies the name of the management scope. The name can be up to 64 characters. If the name contains spaces, enclose the name in quotation marks (").

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

### -DatabaseList

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DatabaseList parameter specifies a list of databases to which the scope should be applied. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can specify multiple values separated by commas. If the values contain spaces, use the following syntax: `"Value1","Value2",..."ValueN"`.

You can't use this parameter with the DatabaseRestrictionFilter, ServerList, RecipientRestrictionFilter, RecipientRoot, or ServerRestrictionFilter parameters.

```yaml
Type: DatabaseIdParameter[]
Parameter Sets: DatabaseList
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseRestrictionFilter

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DatabaseRestrictionFilter parameter uses OPATH filter syntax to specify the databases that are included in the scope. The syntax is `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For a list of filterable database properties, see [Understanding management role scopes](https://learn.microsoft.com/exchange/understanding-management-role-scopes-exchange-2013-help).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

You can't use this parameter with the RecipientRestrictionFilter, ServerRestrictionFilter, RecipientRoot, DatabaseList, or ServerList parameters.

```yaml
Type: String
Parameter Sets: DatabaseFilter
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientRestrictionFilter

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The RecipientRestrictionFilter parameter uses OPATH filter syntax to specify the recipients that are included in the scope. The syntax is `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For filterable recipient properties, see [Filterable properties for the RecipientFilter parameter](https://learn.microsoft.com/powershell/exchange/recipientfilter-properties).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

You can't use this parameter with the DatabaseRestrictionFilter, DatabaseList, ServerList, or ServerRestrictionFilter parameters.

```yaml
Type: String
Parameter Sets: RecipientFilter
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServerList

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The ServerList parameter specifies a list of servers to which the scope should be applied. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

You can specify multiple values separated by commas. If the values contains spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

You can't use this parameter with the RecipientRestrictionFilter, RecipientRoot, DatabaseRestrictionFilter, DatabaseList, or ServerRestrictionFilter parameters.

```yaml
Type: ServerIdParameter[]
Parameter Sets: ServerList
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServerRestrictionFilter

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The ServerRestrictionFilter parameter uses OPATH filter syntax to specify the servers that are included in the scope. The syntax is `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For a list of filterable server properties, see [Understanding management role scopes](https://learn.microsoft.com/exchange/understanding-management-role-scopes-exchange-2013-help).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

You can't use this parameter wit the RecipientRestrictionFilter, RecipientRoot, DatabaseRestrictionFilter, DatabaseList, or ServerList parameters.

```yaml
Type: String
Parameter Sets: ServerFilter
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -Exclusive

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The Exclusive switch specifies that the role should be an exclusive scope. You don't need to specify a value with this switch.

When you create exclusive management scopes, only users or universal security groups (USG) assigned exclusive scopes that contain objects to be modified can access those objects. Users or USGs that aren't assigned an exclusive scope that contains the objects immediately lose access to those objects.

```yaml
Type: SwitchParameter
Parameter Sets: DatabaseList, DatabaseFilter, RecipientFilter, ServerList, ServerFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

Use this switch to create an exclusive scope without showing the warning that the exclusive scope takes effect immediately.

```yaml
Type: SwitchParameter
Parameter Sets: DatabaseList, DatabaseFilter, RecipientFilter, ServerList, ServerFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientRoot

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The RecipientRoot parameter specifies the organizational unit (OU) under which the filter specified with the RecipientRestrictionFilter parameter should be applied. Valid input for this parameter is an OU or domain that's returned by the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name
- Canonical name
- Distinguished name (DN)
- GUID

You can't use this parameter with the ServerRestrictionFilter or DatabaseRestrictionFilter parameters.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: RecipientFilter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

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
Use two-letter country codes (ISO 3166-1 alpha-2) instead of the full country name in filters. For example, use `-RecipientRestrictionFilter "UsageLocation -eq 'FR'"` for France.

## RELATED LINKS
