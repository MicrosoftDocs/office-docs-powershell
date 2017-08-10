---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsClsConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Removes one or more collections of centralized logging configuration settings.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Removes one or more collections of centralized logging configuration settings.
Centralized logging provides a way for administrators to simultaneously enable or disable event tracing on multiple computers.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Remove-CsClsConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Microsoft Lync Server 2013 Preview.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using Windows PowerShell and the Search-CsClsLogging cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Lync Server.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

It is also possible to define custom scenarios by using the New-CsClsScenario cmdlet.

Centralized logging is managed by using collections of centralized logging service configuration settings.
When you install Microsoft Lync Server 2013 Preview, you install a global set of these configuration settings; in addition, administrators can add custom settings collections at the site scope.
Later on, these site-scoped settings can be removed by using the Remove-CsClsConfiguration cmdlet.
Note that this cmdlet can also be run against the global settings collection.
In that case, however, the collection will not be removed.
Instead, all the properties in the collection will be reset to their default values.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsClsConfiguration"}

Lync Server Control Panel: The functions carried out by the Remove-CsClsConfiguration cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The centralized logging service (which replaces the OCSLogger and OCSTracer tools used in Microsoft Lync Server 2010) provides a way for administrators to manage logging and tracing for all computers and pools running Skype for Business Server 2015.
Centralized logging enables administrators to stop, start, and configure logging for one or more pools and computers by using a single command; for example, you can use one command to enable Address Book service logging on all your Address Book servers.
This differs from the OCSLogger and OCSTracer tools, which had to be individually managed (including individually stopped and started) on each server.
In addition, the centralized logging service also provides a way for administrators to search trace logs from the command, using the Windows PowerShell command-line interface and the Search-CsClsLogging cmdlet.

Centralized logging is built around a series of predefined scenarios that offer a more finely-targeted approach to logging than offered in previous versions of Skype for Business Server 2015.
These scenarios predetermine the server components and logging for you; as a result, an administrator enabling the RGS scenario can be confident that he or she will only log information relevant to the Response Group service and not to, say, the audio conferencing provider service.

It is also possible to define custom scenarios by using the New-CsClsScenario cmdlet.

Centralized logging is managed by using collections of centralized logging service configuration settings.
When you install Skype for Business Server 2015, you install a global set of these configuration settings; in addition, administrators can add custom settings collections at the site scope.
Later on, these site-scoped settings can be removed by using the Remove-CsClsConfiguration cmdlet.
Note that this cmdlet can also be run against the global settings collection.
In that case, however, the collection will not be removed.
Instead, all the properties in the collection will be reset to their default values.

Skype for Business Server Control Panel: The functions carried out by the Remove-CsClsConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 removes the centralized logging configuration settings applied to the Redmond site.

Remove-CsClsConfiguration -Identity "site:Redmond"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 removes the centralized logging configuration settings applied to the Redmond site.

Remove-CsClsConfiguration -Identity "site:Redmond"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the centralized logging configuration settings applied to the site scope are removed.
To do this, the command first calls Get-CsClsConfiguration along the with Filter parameter; the filter value "site:*" limits the returned data to settings configured at the site scope.
Those settings are then piped to, and removed by, the Remove-CsClsConfiguration cmdlet.

Get-CsClsConfiguration -Filter "site:*" | Remove-CsClsConfiguration

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the centralized logging configuration settings applied to the site scope are removed.
To do this, the command first calls the Get-CsClsConfiguration cmdlet along the with Filter parameter; the filter value "site:*" limits the returned data to settings configured at the site scope.
Those settings are then piped to, and removed by, the Remove-CsClsConfiguration cmdlet.

Get-CsClsConfiguration -Filter "site:*" | Remove-CsClsConfiguration

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes all the centralized logging configuration settings that allow for an ETL file larger than 20 megabytes.
To perform this task, the command first calls Get-CsClsConfiguration without any parameters; that returns a collection of all the centralized logging settings in use in the organization.
Those settings are then piped to the Where-Object cmdlet, which picks out only the settings where the EtlFileRollverSizeMB property is greater than (-gt) 20 megabytes.
Settings that meet that criterion are then piped to, and delete by, Remove-CsClsConfiguration.

Get-CsClsConfiguration | Where-Object {$_.EtlFileRolloverSizeMB -gt 20} | Remove-CsClsConfiguration

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes all the centralized logging configuration settings that allow for an ETL file larger than 20 megabytes.
To perform this task, the command first calls the Get-CsClsConfiguration cmdlet without any parameters; that returns a collection of all the centralized logging settings in use in the organization.
Those settings are then piped to the Where-Object cmdlet, which picks out only the settings where the EtlFileRollverSizeMB property is greater than (-gt) 20 megabytes.
Settings that meet that criterion are then piped to, and delete by, the Remove-CsClsConfiguration cmdlet.

Get-CsClsConfiguration | Where-Object {$_.EtlFileRolloverSizeMB -gt 20} | Remove-CsClsConfiguration

## PARAMETERS

### -Identity
Unique identifier for the collection of centralized logging configuration settings you want to remove.
To remove the global settings use this syntax:

-Identity "global"

Note that the global policy cannot actually be removed.
Instead, all of the policy properties will be reset to their default values.

To remove a collection configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

Note that you cannot use wildcards when specifying an Identity.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Remove-CsClsConfiguration accepts pipelined instances of the icrosoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.CentralizedLoggingConfiguration object.

###  
The Remove-CsClsConfiguration cmdlet accepts pipelined instances of the icrosoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.CentralizedLoggingConfiguration object.

## OUTPUTS

###  
None.
Instead, Remove-CsClsConfiguration deletes existing instances of the icrosoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.CentralizedLoggingConfiguration object.

###  
None.
Instead, the Remove-CsClsConfiguration cmdlet deletes existing instances of the icrosoft.Rtc.Management.WritableConfig.Settings.CentralizedLogging.CentralizedLoggingConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsClsConfiguration]()

[New-CsClsConfiguration]()

[Set-CsClsConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/f10005f4-ae5c-4d9e-800f-48183b5182be(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f10005f4-ae5c-4d9e-800f-48183b5182be(OCS.16).aspx)

