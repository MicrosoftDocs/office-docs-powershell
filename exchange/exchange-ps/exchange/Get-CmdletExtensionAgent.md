---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-CmdletExtensionAgent

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-CmdletExtensionAgent cmdlet on a server running Microsoft Exchange Server 2010 to display a list of cmdlet extension agents in the organization.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-CmdletExtensionAgent cmdlet on a server running Microsoft Exchange Server 2013 to display a list of cmdlet extension agents in the organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-CmdletExtensionAgent cmdlet to view cmdlet extension agents.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-CmdletExtensionAgent [-Assembly <String>] [-DomainController <Fqdn>] [-Enabled <$true | $false>]
 [<CommonParameters>]
```

### Set1
```
Get-CmdletExtensionAgent [[-Identity] <CmdletExtensionAgentIdParameter>] [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

Run the Get-CmdletExtensionAgent cmdlet on an Exchange 2010 server to display a list of cmdlet extension agents in the organization.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "cmdlet extension agents" entry in the Exchange and Shell Infrastructure Permissions topic.

!!! Exchange Server 2013

Run the Get-CmdletExtensionAgent cmdlet on an Exchange 2013 server to display a list of cmdlet extension agents in the organization.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Cmdlet extension agents" entry in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016

Cmdlet extension agents are used by Exchange cmdlets in Exchange Server 2010 and later. Cmdlets provided by other Microsoft or third-party products can't use cmdlet extension agents.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-CmdletExtensionAgent "Mailbox Permissions Agent"
```

This example displays the details about a specific cmdlet extension agent.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-CmdletExtensionAgent "Mailbox Permissions Agent"
```

This example displays the details about a specific cmdlet extension agent.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-CmdletExtensionAgent | Format-Table -Auto Name,Enabled,Priority
```

This example displays a summary list of all the cmdlet extension agents in the organization.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-CmdletExtensionAgent | Format-Table Name, Enabled, Priority
```

This example displays a list of all the cmdlet extension agents in the organization. The Name, Enabled, and Priority properties of each agent are displayed in a table. This is done by piping the results of the Get-CmdletExtensionAgent cmdlet to the Format-Table cmdlet.


For more information about pipelining and the Format-Table cmdlet, see the following topics:


Pipelining

Working with Command Output

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-CmdletExtensionAgent | Format-Table Name, Enabled, Priority
```

This example displays a list of all the cmdlet extension agents in the organization. The Name, Enabled, and Priority properties of each agent are displayed in a table. This is done by piping the results of the Get-CmdletExtensionAgent cmdlet to the Format-Table cmdlet.


For more information about pipelining and the Format-Table cmdlet, see the following topics:


Pipelining

Working with command output

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-CmdletExtensionAgent "Mailbox Creation Time Agent"
```

This example displays detailed information for the Exchange cmdlet extension agent named Mailbox Creation Time Agent.

## PARAMETERS

### -Assembly
!!! Exchange Server 2010, Exchange Server 2013

The Assembly parameter specifies that only the agents that match the assembly name provided should be listed.



!!! Exchange Server 2016

The Assembly parameter filters the results by the specified Assembly property value. The value for the built-in Exchange cmdlet extension agents is Microsoft.Exchange.ProvisioningAgent.dll.



```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
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

### -Enabled
!!! Exchange Server 2010

The Enabled parameter specifies whether the cmdlet should return a list of enabled agents only, or a list of disabled agents only. Valid values are $True and $False.



!!! Exchange Server 2013

The Enabled parameter specifies whether the cmdlet should return a list of enabled agents only, or a list of disabled agents only. Valid values are $true and $false.



!!! Exchange Server 2016

The Enabled parameter filters the results by enabled or disabled cmdlet extension agents. Valid values are:

- $true: Only enabled agents are included in the results.

- $false: Only disabled agents are included in the results.

If you don't use this parameter, enabled and disabled agents are included in the results.



```yaml
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the name of the cmdlet extension agent to view. If the name contains spaces, enclose the name in quotation marks.



!!! Exchange Server 2013

The Identity parameter specifies the name of the cmdlet extension agent to view. If the name contains spaces, enclose the name in quotation marks (").



!!! Exchange Server 2016

The Identity parameter specifies the name of the cmdlet extension agent that you want to view. You can use any value that uniquely identifies the agent. For example:

- Name

- Distinguished name (DN)

- GUID



```yaml
Type: CmdletExtensionAgentIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/46cc31dd-3799-45e4-bcce-0d0699a61dd6.aspx)

