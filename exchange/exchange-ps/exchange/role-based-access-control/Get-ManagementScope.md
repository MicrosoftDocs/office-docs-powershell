---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
title: Get-ManagementScope
schema: 2.0.0
---

# Get-ManagementScope

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ManagementScope cmdlet to return a list of management scopes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ManagementScope [[-Identity] <ManagementScopeIdParameter>] [-DomainController <Fqdn>]
 [-Exclusive <$true | $false>] [-Orphan] [<CommonParameters>]
```

## DESCRIPTION
You can retrieve one scope or many, retrieve only scopes that aren't associated with management role assignments, or retrieve scopes that are exclusive or regular scopes.

For more information about regular and exclusive scopes, see Understanding management role scopes (https://technet.microsoft.com/library/dd335146.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ManagementScope Redmond*
```

This example retrieves all the management scopes that start with the string Redmond.

### -------------------------- Example 2 --------------------------
```
Get-ManagementScope "Redmond Servers Scope" | Format-List
```

This example retrieves the Redmond Servers Scope using the Get-ManagementScope cmdlet and pipes the output to the Format-List cmdlet. For more information about the Format-List cmdlet, see Working with command output (https://technet.microsoft.com/library/bb123533.aspx).

### -------------------------- Example 3 --------------------------
```
Get-ManagementScope -Orphan
```

This example retrieves a list of management scopes that aren't associated with any role assignments.

### -------------------------- Example 4 --------------------------
```
Get-ManagementScope -Exclusive $True
```

This example retrieves a list of exclusive scopes.

## PARAMETERS

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
The Exclusive parameter specifies whether exclusive scopes should be returned. If the Exclusive parameter isn't specified, regular scopes and exclusive scopes are returned. If the Exclusive parameter is set to $True, only exclusive scopes are returned. If the Exclusive parameter is set to $False, only regular scopes are returned. The valid values are $True and $False.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the name of the management scope to return. If the management scope name contains spaces, enclose it in quotation marks (").

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Orphan
The Orphan parameter returns only the management scopes that aren't associated with role assignments.

```yaml
Type: SwitchParameter
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

[Online Version](https://technet.microsoft.com/library/a14e4ca3-2035-4959-a55f-efc50685a224.aspx)
