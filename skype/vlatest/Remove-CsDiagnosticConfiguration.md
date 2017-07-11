---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsDiagnosticConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes one or more of the diagnostic configuration settings collections currently in use in your organization.
Diagnostic configuration settings are used to determine whether traffic to or from a given domain or Uniform Resource Identifier (URI) is recorded in your Microsoft Lync Server 2010 log files.

Below Content Applies To: Lync Server 2013

Removes one or more of the diagnostic configuration settings collections currently in use in your organization.
Diagnostic configuration settings are used to determine whether traffic to or from a given domain or Uniform Resource Identifier (URI) is recorded in your Lync Server log files.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Removes one or more of the diagnostic configuration settings collections currently in use in your organization.
Diagnostic configuration settings are used to determine whether traffic to or from a given domain or Uniform Resource Identifier (URI) is recorded in your Skype for Business Server 2015 log files.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsDiagnosticConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

If you enable logging for Lync Server 2010, then, by default, traffic traveling to or from any domain or URI is included in those log files.
This ensures that as much information as possible is recorded in the log files.

However, this can occasionally result in too much information.
For example, if you are experiencing connectivity problems with a particular domain, you might want to limit logging to traffic between your network and that domain; that makes it easier for you to identify the relevant records and, in turn, might make it easier for you to diagnose and correct the problem.

Diagnostic configuration settings make it possible for you to specify the domains or URIs that will be recorded in the log files; if a diagnostic filter is enabled then only traffic to or from the specified domains will be logged.
Lync Server enables you to create diagnostic configuration settings, and apply diagnostic filters, at the site scope.
In turn, this enables you to apply filtering to, say, the Redmond site while leaving filtering disabled on your other sites.

You can use the  Remove-CsDiagnosticConfiguration cmdlet to remove any of the diagnostic configuration settings you have created at the site scope.
The Remove-CsDiagnosticConfiguration cmdlet can also be run against the global diagnostic configuration settings.
In that case, however, the collection will not be deleted; that's because Lync Server does not allow you to delete global collections.
Instead, removing a global collection causes the properties in that collection to be reset to their default values.
That means that all the filters added to that collection will be removed.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsDiagnosticConfiguration cmdlet: cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsDiagnosticConfiguration"}

Below Content Applies To: Lync Server 2013

If you enable logging for Lync Server, then, by default, traffic traveling to or from any domain or URI is included in those log files.
This ensures that as much information as possible is recorded in the log files.

However, this can occasionally result in too much information.
For example, if you are experiencing connectivity problems with a particular domain, you might want to limit logging to traffic between your network and that domain; that makes it easier for you to identify the relevant records and, in turn, might make it easier for you to diagnose and correct the problem.

Diagnostic configuration settings make it possible for you to specify the domains or URIs that will be recorded in the log files; if a diagnostic filter is enabled then only traffic to or from the specified domains will be logged.
Lync Server enables you to create diagnostic configuration settings, and apply diagnostic filters, at the site scope.
In turn, this enables you to apply filtering to, say, the Redmond site while leaving filtering disabled on your other sites.

You can use the Remove-CsDiagnosticConfiguration cmdlet to remove any of the diagnostic configuration settings you have created at the site scope.
The Remove-CsDiagnosticConfiguration cmdlet can also be run against the global diagnostic configuration settings.
In that case, however, the collection will not be deleted; that's because Lync Server does not allow you to delete global collections.
Instead, removing a global collection causes the properties in that collection to be reset to their default values.
That means that all the filters added to that collection will be removed.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsDiagnosticConfiguration cmdlet: cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsDiagnosticConfiguration"}

Below Content Applies To: Skype for Business Server 2015

If you enable logging for Skype for Business Server 2015, then, by default, traffic traveling to or from any domain or URI is included in those log files.
This ensures that as much information as possible is recorded in the log files.

However, this can occasionally result in too much information.
For example, if you are experiencing connectivity problems with a particular domain, you might want to limit logging to traffic between your network and that domain; that makes it easier for you to identify the relevant records and, in turn, might make it easier for you to diagnose and correct the problem.

Diagnostic configuration settings make it possible for you to specify the domains or URIs that will be recorded in the log files; if a diagnostic filter is enabled then only traffic to or from the specified domains will be logged.
Skype for Business Server 2015 enables you to create diagnostic configuration settings, and apply diagnostic filters, at the site scope.
In turn, this enables you to apply filtering to, say, the Redmond site while leaving filtering disabled on your other sites.

You can use the Remove-CsDiagnosticConfiguration cmdlet to remove any of the diagnostic configuration settings you have created at the site scope.
The Remove-CsDiagnosticConfiguration cmdlet can also be run against the global diagnostic configuration settings.
In that case, however, the collection will not be deleted; that's because Skype for Business Server 2015 does not allow you to delete global collections.
Instead, removing a global collection causes the properties in that collection to be reset to their default values.
That means that all the filters added to that collection will be removed.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsDiagnosticConfiguration -Identity site:Redmond
```

The preceding command deletes the diagnostic configuration settings that have the Identity site:Redmond.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 deletes the diagnostic configuration settings that have the Identity site:Redmond.

Remove-CsDiagnosticConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 deletes the diagnostic configuration settings that have the Identity site:Redmond.

Remove-CsDiagnosticConfiguration -Identity site:Redmond

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsDiagnosticConfiguration -Filter site:* | Remove-CsDiagnosticConfiguration
```

The command shown in Example 2 deletes all the diagnostic configuration settings that have been configured at the site scope.
To do this, the command calls Get-CsDiagnosticConfiguration along with the Filter parameter; the filter value "site:*" limits the returned data to settings where the Identity begins with the characters "site:".
The filtered collection is then piped to Remove-CsDiagnosticConfiguration, which removes each item in that collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 deletes all the diagnostic configuration settings that have been configured at the site scope.
To do this, the command calls Get-CsDiagnosticConfiguration along with the Filter parameter; the filter value "site:*" limits the returned data to settings where the Identity begins with the characters "site:".
The filtered collection is then piped to Remove-CsDiagnosticConfiguration, which removes each item in that collection.

Get-CsDiagnosticConfiguration -Filter site:* | Remove-CsDiagnosticConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 deletes all the diagnostic configuration settings that have been configured at the site scope.
To do this, the command calls the Get-CsDiagnosticConfiguration cmdlet along with the Filter parameter; the filter value "site:*" limits the returned data to settings where the Identity begins with the characters "site:".
The filtered collection is then piped to the Remove-CsDiagnosticConfiguration cmdlet, which removes each item in that collection.

Get-CsDiagnosticConfiguration -Filter site:* | Remove-CsDiagnosticConfiguration

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsDiagnosticConfiguration | Remove-CsDiagnosticConfiguration
```

In Example 3, the command deletes all the diagnostic configuration settings currently in use in the organization.
To perform this task, Get-CsDiagnosticConfiguration is first called without any parameters in order to return a collection of all the diagnostic configuration settings currently in use in the organization.
These items are then piped to the Remove-CsDiagnosticConfiguration, which removes each item in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, the command deletes all the diagnostic configuration settings currently in use in the organization.
To perform this task, Get-CsDiagnosticConfiguration is first called without any parameters in order to return a collection of all the diagnostic configuration settings currently in use in the organization.
These items are then piped to the Remove-CsDiagnosticConfiguration, which removes each item in the collection.

Get-CsDiagnosticConfiguration | Remove-CsDiagnosticConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the command deletes all the diagnostic configuration settings currently in use in the organization.
To perform this task, the Get-CsDiagnosticConfiguration cmdlet is first called without any parameters in order to return a collection of all the diagnostic configuration settings currently in use in the organization.
These items are then piped to the Remove-CsDiagnosticConfiguration cmdlet, which removes each item in the collection.

Get-CsDiagnosticConfiguration | Remove-CsDiagnosticConfiguration

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier for the diagnostic configuration settings to be removed.
To remove settings configured at the site scope, use syntax similar to this: -Identity "site:Redmond".

Remove-CsDiagnosticConfiguration can also be run against the global configuration settings; in that case, use this syntax: -Identity global.
However, the global settings will not actually be removed; instead, the properties found in the global settings will be reset to their default values.



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the diagnostic configuration settings to be removed.
To remove settings configured at the site scope, use syntax similar to this: -Identity "site:Redmond".

The Remove-CsDiagnosticConfiguration cmdlet can also be run against the global configuration settings; in that case, use this syntax: -Identity global.
However, the global settings will not actually be removed; instead, the properties found in the global settings will be reset to their default values.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.DiagnosticFilterSettings object.
Remove-CsDiagnosticConfiguration accepts pipelined instances of the diagnostic filter settings object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.DiagnosticFilterSettings object.
The Remove-CsDiagnosticConfiguration cmdlet accepts pipelined instances of the diagnostic filter settings object.

## OUTPUTS

###  
None.
Instead, Remove-CsDiagnosticConfiguration deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.DiagnosticFilterSettings object.

###  
None.
Instead, the Remove-CsDiagnosticConfiguration cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.DiagnosticFilterSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b15293bf-d0d1-4322-ab1d-10b54636746a(OCS.14).aspx)

[Get-CsDiagnosticConfiguration]()

[New-CsDiagnosticConfiguration]()

[Set-CsDiagnosticConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/b15293bf-d0d1-4322-ab1d-10b54636746a(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b15293bf-d0d1-4322-ab1d-10b54636746a(OCS.16).aspx)

