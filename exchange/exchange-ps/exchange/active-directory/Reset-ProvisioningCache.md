---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: Reset-ProvisioningCache
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# Reset-ProvisioningCache

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

The Reset-ProvisioningCache cmdlet clears the Windows PowerShell provisioning cache of frequently used Active Directory objects. This cmdlet is only used for diagnostic purposes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Reset-ProvisioningCache [-Server] <Fqdn> -Application <String> [-GlobalCache]
 [-CacheKeys <MultiValuedProperty>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

### Set1
```
Reset-ProvisioningCache [-Server] <Fqdn> -Application <String> [-CacheKeys <MultiValuedProperty>] [-Confirm]
 [-CurrentOrganization] [-Organizations <MultiValuedProperty>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Reset-ProvisioningCache cmdlet is for diagnostic purposes only and is rarely used. Exchange administrators need to run this cmdlet only if incorrect links or properties are stamped on newly provisioned recipients, which can be caused by stale data in the provisioning cache. This is a rare occurrence because the provisioning cache has invalidation notification logic.

The Reset-ProvisioningCache cmdlet clears the Windows PowerShell provisioning cache of frequently used Active Directory objects. To reduce Active Directory requests, a provisioning cache is initialized in each Windows PowerShell runspace and is used to cache common objects that are frequently used by cmdlets and provisioning handlers. During Exchange cmdlet execution, the provisioning cache loads configuration objects from Active Directory to help run a cmdlet. For example, when you create a mailbox, the New-Mailbox cmdlet obtains properties from Active Directory. When running cmdlets, configuration objects such as database containers, administrative role groups, and LegacyDNs are retrieved from Active Directory. Because these types of objects are stable and don't change for months or years after they're created, they're stored in the provisioning cache used by Windows PowerShell. This increases provisioning efficiency and significantly improves cmdlet performance.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Reset-ProvisioningCache -Server EXSRV1.contoso.com -Application Powershell -GlobalCache
```

This example resets the provisioning cache for Windows PowerShell running on the server EXSRV1.contoso.com in an on-premises Exchange organization and specifies that all cache keys are cleared.

### -------------------------- Example 2 --------------------------
```
Reset-ProvisioningCache -Application Powershell-Proxy -Server datacenter1.adatum.com -GlobalCache
```

This example runs in a multi-tenant deployment by a data center administrator to reset the provisioning cache for Windows PowerShell for the adatum.com tenant and clear all cache keys.

## PARAMETERS

### -Application
The Application parameter specifies the specific administrative application to reset the provisioning cache for. You can use the following values:

- Powershell

- Powershell-LiveId

- Powershell-Proxy

- PowershellLiveId-Proxy

- Ecp

- Psws

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalCache
The GlobalCache switch specifies that all cache keys are cleared.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the fully qualified domain name (FQDN) of the server that the application you want to reset is running on.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CacheKeys
The CacheKeys parameter specifies the value for the cache key that you want to clear. The format for the values should contain 32 digits separated by four dashes: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

Use the Dump-ProvisioningCache cmdlet to return a list of cache keys.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CurrentOrganization
The CurrentOrganization switch specifies that the provision cache is reset for this organization.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organizations
The Organizations parameter specifies the organizations that the provisioning cache will be reset. This parameter is used in multi-tenant deployments.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/687309c9-150e-4cdf-9639-3247eb6608a4.aspx)
