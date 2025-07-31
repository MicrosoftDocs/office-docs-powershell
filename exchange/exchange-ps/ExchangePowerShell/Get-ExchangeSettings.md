---
applicable: Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-exchangesettings
schema: 2.0.0
title: Get-ExchangeSettings
---

# Get-ExchangeSettings

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ExchangeSettings cmdlet to view customized Exchange setting objects that are stored in Active Directory. Use the New-ExchangeSettings to create the settings object, and the Set-ExchangeSettings cmdlet to define the actual settings.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ExchangeSettings [[-Identity] <ExchangeSettingsIdParameter>]
 [-ConfigName <String>]
 [-Database <DatabaseIdParameter>]
 [-Diagnostic]
 [-DiagnosticArgument <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-GenericScopeName <String>]
 [-GenericScopes <String[]>]
 [-GenericScopeValue <String>]
 [-Organization <OrganizationIdParameter>]
 [-Process <String>]
 [-Server <ServerIdParameter>]
 [-User <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ExchangeSettings
```

This example returns a summary list of all Exchange setting objects.

### Example 2
```powershell
Get-ExchangeSettings -Identity Audit | Format-List
```

This example returns a summary list of all Exchange setting objects.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the name of the Exchange setting object. You can use any value that uniquely identifies the object. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ExchangeSettingsIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ConfigName

> Applicable: Exchange Server 2016, Exchange Server 2019

The ConfigName parameter filter the results by the specified property name. The value you specify is visible in the EffectiveSetting property.

The available values are determined by the schema of the Exchange setting object.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database

> Applicable: Exchange Server 2016, Exchange Server 2019

The Database parameter filters the results by mailbox database. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- ExchangeLegacyDN
- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Diagnostic

> Applicable: Exchange Server 2016, Exchange Server 2019

The Diagnostic switch specifies whether to return extremely detailed information in the results. You don't need to specify a value with this switch.

The detailed information is visible in the DiagnosticInfo property.

Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticArgument

> Applicable: Exchange Server 2016, Exchange Server 2019

The DiagnosticArgument parameter modifies the results that are returned by using the Diagnostic switch. Typically, you use the Diagnostic switch and the DiagnosticArgument parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Exchange Server 2016, Exchange Server 2019

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenericScopeName

> Applicable: Exchange Server 2016, Exchange Server 2019

The GenericScopeName parameter filters the results by the scope. The available values are determined by the schema of the Exchange setting object.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenericScopes

> Applicable: Exchange Server 2016, Exchange Server 2019

The GenericScopes parameter filters the results by the scope. The available values are determined by the schema of the Exchange setting object. This parameter uses the syntax `"key1=value1","key2=value2", "keyN=valueN`.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenericScopeValue

> Applicable: Exchange Server 2016, Exchange Server 2019

The GenericScopeValue parameter filters the results by the value of the scope specified by the GenericScopeName parameter. The available values are determined by the schema of the Exchange setting object.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Process

> Applicable: Exchange Server 2016, Exchange Server 2019

The Process parameter filters the results by the specified process. The available values are determined by the schema of the Exchange setting object.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2016, Exchange Server 2019

The Server parameter filters the results by Exchange server. You can use any value that uniquely identifies the server. For example:

- Name
- Distinguished name (DN)
- ExchangeLegacyDN
- GUID

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User

> Applicable: Exchange Server 2016, Exchange Server 2019

The User parameter filters the results by user. You identify the user by their GUID value (for example, 87246450-1b19-4c81-93dc-1a4200eff66c). To find the GUID for a user, run the following command: `Get-User <UserIdentity> | Format-List Name,GUID`.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
