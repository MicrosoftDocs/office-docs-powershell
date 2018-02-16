---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Remove-ThrottlingPolicy

## SYNOPSIS
!!! Exchange Server 2010

Use the Remove-ThrottlingPolicy cmdlet to remove a non-default Microsoft Exchange throttling policy.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Remove-ThrottlingPolicy cmdlet to remove a non-default Microsoft Exchange throttling policy.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-ThrottlingPolicy [-Identity] <ThrottlingPolicyIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-WhatIf] [-Force] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can't remove the default client throttling policy. Also, you can't remove a policy that's associated with any users. For more information, see "Example 2" later in this topic.

For more information about client throttling, see Understanding Client Throttling Policies. For more information about managing performance by using client throttling policies, see Managing Performance with Client Throttling Policies.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Client throttling settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

You can't remove the default client throttling policy. Also, you can't remove a policy associated with any users. For more information, see Example 2.

For more information about how to control the resources consumed by individual users, see Exchange workload management.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "User throttling" entry in the Server health and performance permissions topic.

!!! Exchange Server 2016

You can't remove the default client throttling policy. Also, you can't remove a policy associated with any users. For more information, see Example 2.

For more information about how to control the resources consumed by individual users, see User workload management in Exchange 2016.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Remove-ThrottlingPolicy -Identity ClientThrottlingPolicy2
```

This example removes the client throttling policy ClientThrottlingPolicy2.

### Example 1 -------------------------- (Exchange Server 2013)
```
Remove-ThrottlingPolicy -Identity ClientThrottlingPolicy2
```

This example removes the user throttling policy ClientThrottlingPolicy2.

### Example 1 -------------------------- (Exchange Server 2016)
```
Remove-ThrottlingPolicy -Identity ClientThrottlingPolicy2
```

This example removes the user throttling policy ClientThrottlingPolicy2.

### Example 2 -------------------------- (Exchange Server 2010)
```
$policy = Get-ThrottlingPolicy ClientThrottlingPolicy2; $mailboxes = Get-Mailbox | where-object {$_.ThrottlingPolicy -eq $policy.Identity}; $defaultPolicy = Get-ThrottlingPolicy | where-object {$_.IsDefault -eq $true}; foreach ($mailbox in $mailboxes) {Set-Mailbox -Identity $mailbox.Identity -ThrottlingPolicy $defaultPolicy}; Remove-ThrottlingPolicy ClientThrottlingPolicy2
```

You can't remove a policy that's associated with any users. This example reassigns the users subject to ClientThrottlingPolicy2 to the default policy. Then, it removes ClientThrottlingPolicy2.

### Example 2 -------------------------- (Exchange Server 2013)
```
$policy = Get-ThrottlingPolicy ClientThrottlingPolicy2; $mailboxes = Get-Mailbox | where-object {$_.ThrottlingPolicy -eq $policy.Identity}; $defaultPolicy = Get-ThrottlingPolicy | where-object {$_.IsDefault -eq $true}; foreach ($mailbox in $mailboxes) {Set-Mailbox -Identity $mailbox.Identity -ThrottlingPolicy $defaultPolicy}; Remove-ThrottlingPolicy ClientThrottlingPolicy2
```

You can't remove a policy that's associated with any users. This example reassigns the users subject to ClientThrottlingPolicy2 to the default policy. Then, it removes ClientThrottlingPolicy2.

### Example 2 -------------------------- (Exchange Server 2016)
```
$policy = Get-ThrottlingPolicy ClientThrottlingPolicy2; $mailboxes = Get-Mailbox | where-object {$_.ThrottlingPolicy -eq $policy.Identity}; $defaultPolicy = Get-ThrottlingPolicy | where-object {$_.IsDefault -eq $true}; foreach ($mailbox in $mailboxes) {Set-Mailbox -Identity $mailbox.Identity -ThrottlingPolicy $defaultPolicy}; Remove-ThrottlingPolicy ClientThrottlingPolicy2
```

You can't remove a policy that's associated with any users. This example reassigns the users subject to ClientThrottlingPolicy2 to the default policy. Then, it removes ClientThrottlingPolicy2.

## PARAMETERS

### -Identity
The Identity parameter identifies the throttling policy you want to remove. Use the name that matches the name of the policy in Active Directory.

```yaml
Type: ThrottlingPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
!!! Exchange Server 2013

The Force switch specifies whether to suppress warning or confirmation messages. This switch can be used when the task is run programmatically and prompting for administrative input is inappropriate. If the Force switch isn't provided in the command, you're prompted for administrative input. You don't have to specify a value with this parameter.



!!! Exchange Server 2016

The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/d98b709b-672e-42ad-afc4-c6e860d33bc9.aspx)

