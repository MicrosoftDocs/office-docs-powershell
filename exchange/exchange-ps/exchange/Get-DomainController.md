---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-domaincontroller
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-DomainController
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-DomainController

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-DomainController cmdlet to view a list of domain controllers that exist in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### GlobalCatalog
```
Get-DomainController [-GlobalCatalog]
 [-Forest <Fqdn>]
 [-Credential <NetworkCredential>]
 [<CommonParameters>]
```

### DomainController
```
Get-DomainController [-DomainName <Fqdn>]
 [-Credential <NetworkCredential>]
 [<CommonParameters>]
```

## DESCRIPTION

The Get-DomainController cmdlet is used by the Exchange admin center to populate fields that display domain controller information.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
$UserCredentials = Get-Credential

Get-DomainController -DomainName corp.contoso.com -Credential $UserCredentials | Format-Table -AutoSize Name,ADSite
```

This example retrieves a list of global catalog servers in the corp.contoso.com domain. Because a different set of credentials are required to access this domain, the Get-Credential cmdlet is used to obtain the username and password from the user.

The first command displays a prompt to the user that accepts the username and password. The credentials are then stored in the $UserCredentials variable. The second command uses the $UserCredentials variable for the Credential parameter value. To make the list more readable, the output is piped to the Format-Table cmdlet and only the Name and ADSite properties are displayed.

For more information about pipelining and the Format-Table cmdlet, see [About Pipelines](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_pipelines) and [Working with command output](https://learn.microsoft.com/exchange/working-with-command-output-exchange-2013-help).

## PARAMETERS

### -GlobalCatalog
The GlobalCatalog switch specifies whether the command should return a list of global catalog servers. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: GlobalCatalog
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
The Credential parameter specifies the username and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

If you use the Forest parameter, the credentials are used to access the forest.

```yaml
Type: NetworkCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainName
The DomainName parameter specifies the fully qualified domain name (FQDN) of the domain for which you want to return a list of domain controllers.

```yaml
Type: Fqdn
Parameter Sets: DomainController
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Forest
The Forest parameter specifies the FQDN of the root domain of the forest for which you want to return a list of domain controllers.

```yaml
Type: Fqdn
Parameter Sets: GlobalCatalog
Aliases:
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
