---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
title: New-ManagementScope
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps || eop-ps"
---

# New-ManagementScope

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-ManagementScope cmdlet to create a regular or exclusive management scope.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set4
```
New-ManagementScope [-Name] <String> -DatabaseList <DatabaseIdParameter[]> [-Confirm]
 [-DomainController <Fqdn>] [-Exclusive] [-Force] [-WhatIf]
 [<CommonParameters>]
```

### Set5
```
New-ManagementScope [-Name] <String> -DatabaseRestrictionFilter <String> [-Confirm] [-DomainController <Fqdn>]
 [-Exclusive] [-Force] [-WhatIf] [<CommonParameters>]
```

### Set6
```
New-ManagementScope [-Name] <String> [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
New-ManagementScope [-Name] <String> -RecipientRestrictionFilter <String> [-Confirm] [-DomainController <Fqdn>]
 [-Exclusive] [-Force] [-RecipientRoot <OrganizationalUnitIdParameter>] 
 [-WhatIf] [<CommonParameters>]
```

### Set3
```
New-ManagementScope [-Name] <String> -ServerList <ServerIdParameter[]> [-Confirm] [-DomainController <Fqdn>]
 [-Exclusive] [-Force] [-WhatIf] [<CommonParameters>]
```

### Set2
```
New-ManagementScope [-Name] <String> -ServerRestrictionFilter <String> [-Confirm] [-DomainController <Fqdn>]
 [-Exclusive] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
After you create a regular or exclusive scope, you need to associate the scope with a management role assignment. To associate a scope with a role assignment, use the New-ManagementRoleAssignment cmdlet. For more information about adding new management scopes, see Create a regular or exclusive scope (https://technet.microsoft.com/library/dd351083.aspx).

For more information about regular and exclusive scopes, see Understanding management role scopes (https://technet.microsoft.com/library/dd335146.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-ManagementScope -Name "Mailbox Servers 1 through 3" -ServerList MailboxServer1, MailboxServer2, MailboxServer3
```

This example creates a scope that includes only the servers MailboxServer1, MailboxServer2, and MailboxServer3. Users assigned roles using management role assignments that have the scope in this example can only perform against the servers included in the scope.

### -------------------------- Example 2 --------------------------
```
New-ManagementScope -Name "Redmond Site Scope" -ServerRestrictionFilter {ServerSite -eq "CN=Redmond,CN=Sites,CN=Configuration,DC=contoso,DC=com"}
```

This example creates the Redmond Site Scope scope and sets a server restriction filter that matches only the servers located in the "CN=Redmond,CN=Sites,CN=Configuration,DC=contoso,DC=com" Active Directory Domain Services (AD DS) site.

### -------------------------- Example 3 --------------------------
```
New-ManagementScope -Name "Executive Mailboxes" -RecipientRoot "contoso.com/Executives" -RecipientRestrictionFilter {RecipientType -eq "UserMailbox"}
```

This example creates the Executive Mailboxes scope. Only mailboxes located within the Executives OU in the contoso.com domain match the recipient restriction filter.

### -------------------------- Example 4 --------------------------
```
New-ManagementScope -Name "Protected Exec Users" -RecipientRestrictionFilter { Title -Like "*VP*" } -Exclusive; New-ManagementRoleAssignment -SecurityGroup "Executive Administrators" -Role "Mail Recipients" -CustomRecipientWriteScope "Protected Exec Users"
```

This example creates the Protected Exec Users exclusive scope. Users that contain the string "VP" in their title match the recipient filter for the scope. When the exclusive scope is created, all users are immediately blocked from modifying the recipients that match the exclusive scope until the scope is associated with a management role assignment. If other role assignments are associated with other exclusive scopes that match the same recipients, those assignments can still modify the recipients.

The exclusive scope is then associated with a management role assignment that assigns the Mail Recipients management role to the Executive Administrators role group. This role group contains administrators who are allowed to modify the mailboxes of high-profile executives. Only the administrators of the Executive Administrators role group can modify users with the string "VP" in their title.

### -------------------------- Example 5 --------------------------
```
New-ManagementScope -Name "Seattle Databases" -DatabaseRestrictionFilter {Name -Like "SEA*" }
```

This example creates the Seattle Databases scope and sets a database restriction filter that matches only the databases that begin with the string "SEA".

## PARAMETERS

### -DatabaseList
This parameter is available only in on-premises Exchange.

The DatabaseList parameter specifies a list of databases to which the scope should be applied. Multiple databases can be specified, separated by commas. If you use the DatabaseList parameter, you can't use the DatabaseRestrictionFilter, ServerList, RecipientRestrictionFilter, RecipientRoot, or ServerRestrictionFilter parameters.

```yaml
Type: DatabaseIdParameter[]
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseRestrictionFilter
This parameter is available only in on-premises Exchange.

The DatabaseRestrictionFilter parameter specifies the filter to apply to database objects. Only database objects that match the filter are included in the scope. If you use the DatabaseRestrictionFilter parameter, you can't use the RecipientRestrictionFilter, ServerRestrictionFilter, RecipientRoot, DatabaseList, or ServerList parameters. For a list of filterable database properties, see Understanding management role scopes (https://technet.microsoft.com/library/dd335146.aspx).

```yaml
Type: String
Parameter Sets: Set5
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the management scope. The name can be up to 64 characters. If the name contains spaces, enclose the name in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientRestrictionFilter
The RecipientRestrictionFilter parameter specifies the filter to apply to recipient objects. Only recipient objects that match the filter are included in the scope. If you use the RecipientRestrictionFilter parameter, you can't use the DatabaseRestrictionFilter, DatabaseList, ServerList, or ServerRestrictionFilter parameters.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServerList
This parameter is available only in on-premises Exchange.

The ServerList parameter specifies a list of servers to which the scope should be applied. Multiple servers can be specified, separated by commas. If you use the ServerList parameter, you can't use the RecipientRestrictionFilter, RecipientRoot, DatabaseRestrictionFilter, DatabaseList, or ServerRestrictionFilter parameters.

```yaml
Type: ServerIdParameter[]
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServerRestrictionFilter
This parameter is available only in on-premises Exchange.

The ServerRestrictionFilter parameter specifies the filter to apply to server objects. Only server objects that match the filter are included in the scope. If you use the ServerRestrictionFilter parameter, you can't use the RecipientRestrictionFilter, RecipientRoot, DatabaseRestrictionFilter, DatabaseList, or ServerList parameters. For a list of filterable server properties, see Understanding management role scopes (https://technet.microsoft.com/library/dd335146.aspx).

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
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
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Exclusive
The Exclusive switch specifies that the role should be an exclusive scope.

When you create exclusive management scopes, only users or universal security groups (USG) assigned exclusive scopes that contain objects to be modified can access those objects. Users or USGs that aren't assigned an exclusive scope that contains the objects immediately lose access to those objects.

```yaml
Type: SwitchParameter
Parameter Sets: Set4, Set5, Set1, Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies that an exclusive scope should be created without showing the warning that the exclusive scope takes effect immediately.

```yaml
Type: SwitchParameter
Parameter Sets: Set4, Set5, Set1, Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientRoot
The RecipientRoot parameter specifies the organizational unit (OU) under which the filter specified with the RecipientRestrictionFilter parameter should be applied. If you use the RecipientRoot parameter, you can't use the DatabaseRestrictionFilter, DatabaseList, ServerList or ServerRestrictionFilter parameters.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
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

[Online Version](https://technet.microsoft.com/library/1ea1f474-69d6-48c0-9beb-bfa4442c5dab.aspx)
