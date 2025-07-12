---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/export-autodiscoverconfig
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Export-AutoDiscoverConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Export-AutoDiscoverConfig

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Export-AutoDiscoverConfig cmdlet to create or update a service connection point for an Autodiscover service pointer in a target Exchange forest.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX
```
Export-AutoDiscoverConfig -TargetForestDomainController <String>
 [-Confirm]
 [-DeleteConfig <Boolean>]
 [-DomainController <Fqdn>]
 [-MultipleExchangeDeployments <Boolean>]
 [-PreferredSourceFqdn <Fqdn>]
 [-SourceForestCredential <PSCredential>]
 [-TargetForestCredential <PSCredential>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Autodiscover Service Connection Point pointer resides Active Directory in the user account forest and includes the LDAP URL of the resource forest that the client will use to locate the Autodiscover service in the resource forest.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Export-AutoDiscoverConfig -TargetForestDomainController contoso.com
```

This example creates a service connection point object to connect to contoso.com Active Directory forest so that Outlook clients can automatically connect to their mailbox without having to set up a profile.

### Example 2
```powershell
Export-AutoDiscoverConfig -TargetForestDomainController dc.contoso.com -MultipleExchangeDeployments $true
```

This example specifies that Exchange is deployed in more than one Active Directory forest while establishing an Autodiscover service connection point to the dc.contoso.com domain controller in contoso.com Active Directory forest.

## PARAMETERS

### -TargetForestDomainController
The TargetForestDomainController parameter specifies the forest or domain controller that you want to export the Autodiscover configuration to.

If the target domain controller requires signing, you'll get the error: "A more secure authentication method is required for this server". Domain controllers that require signing aren't supported.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteConfig
The DeleteConfig parameter causes the command to delete your configuration settings on the service connection point object.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MultipleExchangeDeployments
The MultipleExchangeDeployments parameter specifies whether multiple Exchange deployments exist. Valid values are:

- $true: Exchange is deployed in more than one Active Directory forest, and the forests are connected. The list of authoritative accepted domains for the source forest is written to the Autodiscover service connection point object. Outlook clients use this object to select the most appropriate forest to search for the Autodiscover service.
- $False: Multiple Exchange deployments aren't used. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredSourceFqdn
The PreferredSourceFqdn parameter specifies the FQDN of the Active Directory domain for the Autodiscover pointer service connection point object.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceForestCredential
The SourceForestCredential parameter specifies the credentials to use when connecting to the source forest.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetForestCredential
The TargetForestCredential parameter specifies the credentials to use to connect to the target forest.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

## RELATED LINKS
