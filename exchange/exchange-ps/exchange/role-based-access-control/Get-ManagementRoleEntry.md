---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
title: Get-ManagementRoleEntry
schema: 2.0.0
---

# Get-ManagementRoleEntry

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ManagementRoleEntry cmdlet to retrieve management role entries that have been configured on management roles.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ManagementRoleEntry [-Identity] <RoleEntryIdParameter> [-DomainController <Fqdn>] [-Parameters <String[]>]
 [-PSSnapinName <String>] [-Type <ManagementRoleEntryType[]>] [<CommonParameters>]
```

## DESCRIPTION
The Get-ManagementRoleEntry cmdlet retrieves role entries that have been configured on roles. You can retrieve specific role entries that match specific criteria such as role name, cmdlet name, parameter name, or a combination of each, or role entry type or the associated Windows PowerShell snap-in.

For more information about management role entries, see Understanding management roles (https://technet.microsoft.com/library/dd298116.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ManagementRoleEntry "Transport Rules\*"
```

This example retrieves a list of all the role entries that exist on the Transport Rules management role.

### -------------------------- Example 2 --------------------------
```
Get-ManagementRoleEntry *\Get-Recipient
```

This example retrieves a list of all the role entries that contain the Get-Recipient cmdlet.

### -------------------------- Example 3 --------------------------
```
Get-ManagementRoleEntry "Tier 2 Help Desk\Set-Mailbox" | Format-List Name, Parameters, Role, Type
```

This example retrieves the Tier 2 Help Desk\\Set-Mailbox role entry and pipes the output of the Get-ManagementRoleEntry cmdlet to the Format-List cmdlet. The Format-List cmdlet then outputs only the Name, Parameters, Role and Type properties from the role entry.

## PARAMETERS

### -Identity
The Identity parameter specifies the role entry to retrieve. You must specify the value of the Identity parameter in the format, \<management role\>\\\<role entry name\>, for example, ExampleRole\\Set-Mailbox.

For more information about how management role entries work, see Understanding management roles (https://technet.microsoft.com/library/dd298116.aspx).

You can use the wildcard character (\*) instead of the role, cmdlet name or both.

If the role entry name contains spaces, enclose the name in quotation marks (").

```yaml
Type: RoleEntryIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
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

### -Parameters
The Parameters parameter includes only the role entries that contain the parameters specified. You can specify multiple parameters, separated by commas. You can use the wildcard character (\*) with partial parameter names to retrieve all parameters that match the value you specify.

This parameter is useful when you use the wildcard character (\*) with the value you specify in the Identity parameter.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PSSnapinName
The PSSnapinName parameter specifies the Windows PowerShell snap-in that contains the role entry to return. Use the Get-PSSnapin cmdlet to retrieve a list of available Windows PowerShell snap-ins.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter specifies the type of role entry to return. The valid values for the Type parameter are any combination of the following parameters, separated by commas: Cmdlet, Script and ApplicationPermission.

```yaml
Type: ManagementRoleEntryType[]
Parameter Sets: (All)
Aliases:
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

[Online Version](https://technet.microsoft.com/library/3b58e5dc-0e57-4998-82cb-94dc081f6420.aspx)
