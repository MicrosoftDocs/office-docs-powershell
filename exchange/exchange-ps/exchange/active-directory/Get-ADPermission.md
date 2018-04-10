---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-ADPermission
schema: 2.0.0
---

# Get-ADPermission

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ADPermission cmdlet to get permissions on an Active Directory object.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-ADPermission [-Identity] <ADRawEntryIdParameter> [-DomainController <Fqdn>] [-Owner] [<CommonParameters>]
```

### Set1
```
Get-ADPermission [-Identity] <ADRawEntryIdParameter> [-DomainController <Fqdn>]
 [-User <SecurityPrincipalIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The ADPermission cmdlets can be used to directly modify Active Directory access control lists (ACLs). Although some Microsoft Exchange features may continue to use the ADPermission cmdlets to manage permissions (for example Send and Receive connectors) Exchange 2013 and later versions no longer use customized ACLs to manage administrative permissions. If you want to grant or deny administrative permissions in Exchange 2013 or later, you need to use Role Based Access Control (RBAC). For more information about RBAC, see Permissions.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ADPermission -Identity Ed
```

This example returns the permissions that have been applied to the user Ed.

### -------------------------- Example 2 --------------------------
```
Get-ADPermission "Contoso.com" -User Chris
```

This example returns the permissions that have been granted to the user Chris on the Contoso.com Receive connector.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the object for which you're retrieving permissions. You can retrieve the permissions for any Active Directory object using its distinguished name (DN). If the object is an Exchange object, you might be able to use the object's name. If the DN or the object's name contains spaces, enclose the value in quotation marks (").

```yaml
Type: ADRawEntryIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -Owner
The Owner switch specifies that the owner of the object specified in the Identity parameter should be returned. If the Owner switch is used, the User parameter can't be used.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter specifies that only the access control entries (ACEs) granted to the specified user on the object specified in the Identity parameter should be returned. If the User parameter is used, the Owner switch can't be used.

If the name of the user contains spaces, enclose the name in quotation marks (").

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/f20251dc-ab54-4dd5-b80c-de0808fd4dc2.aspx)
