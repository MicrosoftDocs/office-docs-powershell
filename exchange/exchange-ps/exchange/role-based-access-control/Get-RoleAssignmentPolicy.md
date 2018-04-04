---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-RoleAssignmentPolicy
schema: 2.0.0
---

# Get-RoleAssignmentPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-RoleAssignmentPolicy cmdlet to view existing management role assignment policies in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-RoleAssignmentPolicy [[-Identity] <MailboxPolicyIdParameter>] 
[-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
For more information about assignment policies, see Understanding management role assignment policies (https://technet.microsoft.com/library/dd638100.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-RoleAssignmentPolicy
```

This example returns a list of all the existing role assignment policies.

### Example 2
```
Get-RoleAssignmentPolicy "End User Policy" | Format-List
```

This example returns the details of the specified assignment policy. The output of the Get-RoleAssignmentPolicy cmdlet is piped to the Format-List cmdlet.


For more information about pipelining and the Format-List cmdlet, see Pipelining (https://technet.microsoft.com/library/aa998260.aspx) and Working with command output (https://technet.microsoft.com/library/bb123533.aspx).

### Example 3
```
Get-RoleAssignmentPolicy | Where { $_.IsDefault -eq $True }
```

This example returns the default assignment policy.

The output of the Get-RoleAssignmentPolicy cmdlet is piped to the Where cmdlet. The Where cmdlet filters out all of the policies except the policy that has the IsDefault property set to $True.

For more information about pipelining and the Format-List cmdlet, see Pipelining (https://technet.microsoft.com/library/aa998260.aspx) and Working with command output (https://technet.microsoft.com/library/bb123533.aspx).

## PARAMETERS

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -Identity
The Identity parameter specifies the name of the assignment policy to view. If the name contains spaces, enclose the name in quotation marks (").

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/da0ecaa3-ce67-4ea2-aca3-56e056555900.aspx)
