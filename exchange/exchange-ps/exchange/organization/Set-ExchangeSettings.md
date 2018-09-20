---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2016, Exchange Server 2019
title: Set-ExchangeSettings
schema: 2.0.0
monikerRange: "exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-ExchangeSettings

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ExchangeSettings cmdlet to configure Exchange setting objects that you created with the New-ExchangeSettings cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set12
```
Set-ExchangeSettings [-Identity] <ExchangeSettingsIdParameter> [-ClearHistory] -Reason <String> [-Confirm]
 [-DomainController <Fqdn>] [-Force] [-WhatIf] [<CommonParameters>]
```

### Set5
```
Set-ExchangeSettings [-Identity] <ExchangeSettingsIdParameter> -ConfigName <String> -ConfigValue <String>
 -Reason <String> [-UpdateSetting] [-Confirm] [-DomainController <Fqdn>] [-Force] [-GroupName <String>]
 [-WhatIf] [<CommonParameters>]
```

### Set9
```
Set-ExchangeSettings [-Identity] <ExchangeSettingsIdParameter> -ConfigName <String> -Reason <String>
 [-RemoveSetting] [-Confirm] [-DomainController <Fqdn>] [-Force] [-GroupName <String>] [-WhatIf]
 [<CommonParameters>]
```

### Set1
```
Set-ExchangeSettings [-Identity] <ExchangeSettingsIdParameter> [-CreateSettingsGroup]
 -ExpirationDate <DateTime> -Reason <String> [-ConfigPairs <String[]>] [-Confirm] [-Disable]
 [-DomainController <Fqdn>] [-Force] [-GroupName <String>] [-MaxVersion <String>] [-MinVersion <String>]
 [-NameMatch <String>] [-Priority <Int32>]
 [-Scope <Forest | Dag | Server | Process | Database | Organization | User | Generic>] [-ScopeFilter <String>]
 [-WhatIf] [<CommonParameters>]
```

### Set2
```
Set-ExchangeSettings [-Identity] <ExchangeSettingsIdParameter> [-CreateSettingsGroup]
 -ExpirationDate <DateTime> -GuidMatch <Guid> -Reason <String> [-ConfigPairs <String[]>] [-Confirm] [-Disable]
 [-DomainController <Fqdn>] [-Force] [-GroupName <String>] [-Priority <Int32>]
 [-Scope <Forest | Dag | Server | Process | Database | Organization | User | Generic>] [-WhatIf]
 [<CommonParameters>]
```

### Set3
```
Set-ExchangeSettings [-Identity] <ExchangeSettingsIdParameter> [-CreateSettingsGroup] -Reason <String>
 -SettingsGroup <String> [-Confirm] [-DomainController <Fqdn>] [-Force] [-WhatIf] [<CommonParameters>]
```

### Set4
```
Set-ExchangeSettings [-Identity] <ExchangeSettingsIdParameter> [-CreateSettingsGroup]
 -ExpirationDate <DateTime> -Reason <String> [-ConfigPairs <String[]>] [-Confirm] [-Disable]
 [-DomainController <Fqdn>] [-Force] [-GenericScopeName <String>] [-GenericScopeValue <String>]
 [-GroupName <String>] [-Priority <Int32>]
 [-Scope <Forest | Dag | Server | Process | Database | Organization | User | Generic>] [-WhatIf]
 [<CommonParameters>]
```

### Set7
```
Set-ExchangeSettings [-Identity] <ExchangeSettingsIdParameter> [-ExpirationDate <DateTime>] -Reason <String>
 [-UpdateSettingsGroup] [-Confirm] [-DomainController <Fqdn>] [-Force] [-GroupName <String>]
 [-Priority <Int32>] [-ScopeFilter <String>] [-WhatIf] [<CommonParameters>]
```

### Set10
```
Set-ExchangeSettings [-Identity] <ExchangeSettingsIdParameter> -Reason <String> [-RemoveSetting]
 -ConfigPairs <String[]> [-Confirm] [-DomainController <Fqdn>] [-Force] [-GroupName <String>] [-WhatIf]
 [<CommonParameters>]
```

### Set11
```
Set-ExchangeSettings [-Identity] <ExchangeSettingsIdParameter> -Reason <String> [-RemoveSettingsGroup]
 [-Confirm] [-DomainController <Fqdn>] [-Force] [-GroupName <String>] [-WhatIf] [<CommonParameters>]
```

### Set8
```
Set-ExchangeSettings [-Identity] <ExchangeSettingsIdParameter> -Reason <String> -SettingsGroup <String>
 [-UpdateSettingsGroup] [-Confirm] [-DomainController <Fqdn>] [-Force] [-WhatIf] [<CommonParameters>]
```

### Set6
```
Set-ExchangeSettings [-Identity] <ExchangeSettingsIdParameter> -Reason <String> [-UpdateSetting]
 -ConfigPairs <String[]> [-Confirm] [-DomainController <Fqdn>] [-Force] [-GroupName <String>] [-WhatIf]
 [<CommonParameters>]
```

### Set13
```
Set-ExchangeSettings [-Identity] <ExchangeSettingsIdParameter> -Reason <String> [-Confirm]
 [-DisableGroup <String>] [-DomainController <Fqdn>] [-EnableGroup <String>] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-ExchangeSettings Audit -UpdateSetting -ConfigName AuditLogPumperEnabled -ConfigValue $true -Reason "Enable Unified Audit Logging"
```

This example allows users to see the results of Unified Audit Logging. This example assumes that you've already created an Exchange settings object for the Audit configuration schema by running the command New-ExchangeSettings -Name Audit.

## PARAMETERS

### -ClearHistory
The ClearHistory switch specifies that you want to clear the entries in the modification history for the Exchange setting object. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set12
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfigName
The ConfigName parameter specifies the available Exchange setting that you want to add, remove, or update in the Exchange settings object. Valid values for this parameter are determined by the configuration schema that was specified by the Name parameter on the New-ExchangeSettings cmdlet.

For add and update operations, you also need to use the ConfigValue parameter to specify the actual value for the setting. You can't use the ConfigName parameter with the ConfigPairs parameter.

```yaml
Type: String
Parameter Sets: Set5, Set9
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfigValue
The ConfigValue parameter specifies the value for the Exchange setting that you specified with the ConfigName parameter. The values are determined by the type of setting (a number, a timespan, $true or $false, etc.).

You can't use the ConfigValue parameter with the ConfigPairs parameter.

```yaml
Type: String
Parameter Sets: Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreateSettingsGroup
The CreateSettingsGroup switch specifies that you're creating an Exchange settings group, which is a group of related Exchange settings. You don't need to specify a value with this switch.

Depending on how you want to configure the settings group, you use either the GroupName parameter or the SettingsGroup parameter to specify the name of the Exchange settings group. Choose carefully, because you can't rename an existing settings group.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set2, Set3, Set4
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpirationDate
The ExpirationDate parameter specifies the end date/time of the Exchange settings that are defined by the specified Exchange settings group.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

You can only use the ExpirationDate parameter with the CreateSettingsGroup or UpdateSettings group parameters.

```yaml
Type: DateTime
Parameter Sets: Set1, Set2, Set4
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: DateTime
Parameter Sets: Set7
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GuidMatch
The GuidMatch parameter specifies the scope of an Exchange settings group based on the GUID of the object (for example, the GUID of the mailbox database). This parameter is available for use with all Scope parameter values other than Forest.

You use the GuidMatch parameter only when you create Exchange settings groups by using the CreateSettingsGroup switch with the GroupName parameter.

You can't use this parameter with the GenericScopeName, GenericScopeValue, MaxVersion, MinVersion, or NameMatch parameters.

```yaml
Type: Guid
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the name of the existing Exchange settings object that contains the Exchange settings that you want to configure.

The value of this parameter is the value of the Name parameter on the New-ExchangeSetting cmdlet when the Exchange settings object was created.

```yaml
Type: ExchangeSettingsIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Reason
The Reason parameter specifies a description for why the Exchange setting or settings group was created or modified. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSetting
The RemoveSetting switch specifies that you're removing an existing Exchange setting from an Exchange settings object. You don't need to specify a value with this switch.

You use the ConfigPairs parameter or the ConfigName parameter to specify the setting that you want to remove.

```yaml
Type: SwitchParameter
Parameter Sets: Set9, Set10
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSettingsGroup
The RemoveSettingsGroup switch specifies that you're removing an Exchange settings group. You don't need to specify a value with this switch.

You use the GroupName parameter to specify the Exchange settings group that you want to remove.

```yaml
Type: SwitchParameter
Parameter Sets: Set11
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SettingsGroup
The SettingsGroup parameter specifies an existing Exchange settings group that's used to create a new settings group, or modify an existing settings group.

You can't use the SettingsGroup parameter with the GroupName parameter.

```yaml
Type: String
Parameter Sets: Set3, Set8
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UpdateSetting
The UpdateSetting switch specifies that you're updating an Exchange setting in an existing Exchange settings object. You don't need to specify a value with this switch.

You use the ConfigPairs parameter or the ConfigName and ConfigValue parameters to configure the Exchange setting.

```yaml
Type: SwitchParameter
Parameter Sets: Set5, Set6
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UpdateSettingsGroup
The UpdateSettingsGroup switch specifies that you're modifying an Exchange settings group. You don't need to specify a value with this switch.

Depending on how you want to configure the settings group, you use either the GroupName parameter or the SettingsGroup parameter to specify the Exchange settings group that you want to modify.

```yaml
Type: SwitchParameter
Parameter Sets: Set7, Set8
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfigPairs
The ConfigName parameter specifies the available Exchange setting that you want to add, remove, or update in the Exchange settings object. Valid values for this parameter are determined by the configuration schema that was specified by the Name parameter on the New-ExchangeSettings cmdlet. The syntax for a value is \<key\>=\<value\>. You can separate multiple values separated by commas.

You can't use the ConfigPairs parameter with the ConfigName or ConfigValue parameters.

```yaml
Type: String[]
Parameter Sets: Set1, Set2, Set4
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String[]
Parameter Sets: Set10, Set6
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disable
The Disable switch specifies that the Exchange settings group is disabled. You don't need to specify a value with this switch.

You can only use this switch with the CreateSettingsGroup switch.

To use this switch to enable an Exchange settings group, use the syntax -Disable:$false.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set2, Set4
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableGroup
The DisableGroup parameter specifies the name of the enabled Exchange settings group that you want to disable. If the value contains spaces, enclose the value in quotation marks (").

You can use the DisableGroup and EnableGroup parameters together in the same command to enable and disable different Exchange settings groups at the same time.

```yaml
Type: String
Parameter Sets: Set13
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
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
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableGroup
The EnableGroup parameter specifies the name of the disabled Exchange settings group that you want to enable. If the value contains spaces, enclose the value in quotation marks (").

You can use the DisableGroup and EnableGroup parameters together in the same command to enable and disable different Exchange settings groups at the same time.

```yaml
Type: String
Parameter Sets: Set13
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenericScopeName
The GenericScopeName parameter specifies the name of the scope. The available values are determined by the schema of the Exchange setting object.

```yaml
Type: String
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenericScopeValue
The GenericScopeValue parameter specifies the value of the scope specified by the GenericScopeName parameter. The available values are determined by the schema of the Exchange setting object.

```yaml
Type: String
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupName
The GroupName parameter specifies the name of the Exchange settings group in group operations. For example:

- Create Exchange settings groups and simultaneously configure the group scope and priority.

- Modify the ExpirationDate, Priority, and ScopeFilter values of existing Exchange settings groups.

- Remove existing Exchange settings groups.

- Add, remove, or update Exchange setting objects in existing Exchange settings groups.

If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: Set5, Set9, Set1, Set2, Set4, Set7, Set10, Set11, Set6
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxVersion
The MaxVersion parameter specifies the scope of an Exchange settings group based on the version of the object (for example, the version of Exchange that's installed on the server). This parameter is available for use with all Scope parameter values other than Forest.

You use the MaxVersion parameter together with the MinVersion parameter only when you create Exchange settings groups by using the CreateSettingsGroup switch with the GroupName parameter.

You can't use this parameter with the GuidMatch, GenericScopeName, or GenericScopeValue parameters.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinVersion
The MinVersion parameter specifies the scope of an Exchange settings group based on the version of the object (for example, the version of Exchange that's installed on the server). This parameter is available for use with all Scope parameter values other than Forest.

You use the MinVersion parameter together with the MaxVersion parameter only when you create Exchange settings groups by using the CreateSettingsGroup switch with the GroupName parameter.

You can't use this parameter with GuidMatch, GenericScopeName, or GenericScopeValue parameters.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NameMatch
The NameMatch parameter specifies the scope of an Exchange settings group based on the name of the object (for example, the process name). This parameter is available for use with all Scope parameter values other than Forest.

You use the NameMatch parameter only when you create Exchange settings groups by using the CreateSettingsGroup switch with the GroupName parameter.

You can't use this parameter with the GuidMatch, GenericScopeName, or GenericScopeValue parameters.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The Priority parameter specifies the priority of an Exchange settings group. The priority value for every group must be unique. A lower priority value indicates a higher priority.

```yaml
Type: Int32
Parameter Sets: Set1, Set2, Set4, Set7
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scope
The Scope parameter specifies the scope of the Exchange settings object. Valid values are:

- Dag

- Database

- Forest

- Generic

- Organization

- Process

- Server

- User

```yaml
Type: Forest | Dag | Server | Process | Database | Organization | User | Generic
Parameter Sets: Set1, Set2, Set4
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScopeFilter
The ScopeFilter parameter specifies the scope of an Exchange settings group based an OPATH filter (for example, ServerRole -like "Mailbox\*"). The filter that's used for this parameter is available for all Scope parameter values other than Forest.

You use the ScopeFilter parameter only when you update Exchange settings groups by using the UpdateSettingsGroup switch with the GroupName parameter.

You can't use this parameter with other scope-related parameters.

```yaml
Type: String
Parameter Sets: Set1, Set7
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
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
Applicable: Exchange Server 2016, Exchange Server 2019
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

[Online Version](https://technet.microsoft.com/library/09882525-a579-4af6-9565-4e44a24c8786.aspx)
