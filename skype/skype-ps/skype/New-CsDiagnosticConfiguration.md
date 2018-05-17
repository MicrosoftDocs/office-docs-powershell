---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsDiagnosticConfiguration
schema: 2.0.0
---

# New-CsDiagnosticConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates new diagnostic configuration settings.
Diagnostic configuration settings are used to determine whether traffic to or from a given domain or Uniform Resource Identifier (URI) is recorded in your Microsoft Lync Server 2010 log files.

**Below Content Applies To:** Lync Server 2013

Creates new diagnostic configuration settings.
Diagnostic configuration settings are used to determine whether traffic to or from a given domain or Uniform Resource Identifier (URI) is recorded in your Lync Server log files.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Creates new diagnostic configuration settings.
Diagnostic configuration settings are used to determine whether traffic to or from a given domain or Uniform Resource Identifier (URI) is recorded in your Skype for Business Server 2015 log files.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsDiagnosticConfiguration [-Identity] <XdsIdentity> [-Filter <Filter>] [-LoggingShare <String>] [-Force]
 [-InMemory] [-WhatIf] [-Confirm] [-LogAllSipHeaders <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

If you enable logging for Lync Server 2010 then, by default, traffic traveling to or from any domain or URI is included in those log files.
This ensures that as much information as possible is recorded in the log files.

However, this can occasionally result in too much information.
For example, if you are experiencing connectivity problems with a particular domain, you might want to limit logging to traffic between your network and that domain; that makes it easier for you to identify the relevant records and, in turn, might make it easier for you to diagnose and correct the problem.

Diagnostic configuration settings make it possible for you to specify the domains or URIs that will be recorded in the log files; for example, you can log only the traffic to or from specified domains.
Lync Server enables you to create diagnostic configuration settings at the site scope.
In turn, this enables you to apply different settings to, say, the Redmond site than you do on your other sites.

Note that you cannot create diagnostic configuration settings at the global scope; that's because the global scope already hosts these settings.
Likewise, you cannot create a new settings collection at the site scope if the specified site already contains diagnostic configuration settings.
For example, your command will fail if you try to create a new collection for the Redmond site and that site already hosts diagnostic configuration settings.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsDiagnosticConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsDiagnosticConfiguration"}

**Below Content Applies To:** Lync Server 2013

If you enable logging for Lync Server then, by default, traffic traveling to or from any domain or URI is included in those log files.
This ensures that as much information as possible is recorded in the log files.

However, this can occasionally result in too much information.
For example, if you are experiencing connectivity problems with a particular domain, you might want to limit logging to traffic between your network and that domain; that makes it easier for you to identify the relevant records and, in turn, might make it easier for you to diagnose and correct the problem.

Diagnostic configuration settings make it possible for you to specify the domains or URIs that will be recorded in the log files; for example, you can log only the traffic to or from specified domains.
Lync Server enables you to create diagnostic configuration settings at the site scope.
In turn, this enables you to apply different settings to, say, the Redmond site than you do on your other sites.

Note that you cannot create diagnostic configuration settings at the global scope; that's because the global scope already hosts these settings.
Likewise, you cannot create a new settings collection at the site scope if the specified site already contains diagnostic configuration settings.
For example, your command will fail if you try to create a new collection for the Redmond site and that site already hosts diagnostic configuration settings.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsDiagnosticConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsDiagnosticConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

If you enable logging for Skype for Business Server 2015 then, by default, traffic traveling to or from any domain or URI is included in those log files.
This ensures that as much information as possible is recorded in the log files.

However, this can occasionally result in too much information.
For example, if you are experiencing connectivity problems with a particular domain, you might want to limit logging to traffic between your network and that domain; that makes it easier for you to identify the relevant records and, in turn, might make it easier for you to diagnose and correct the problem.

Diagnostic configuration settings make it possible for you to specify the domains or URIs that will be recorded in the log files; for example, you can log only the traffic to or from specified domains.
Skype for Business Server 2015 enables you to create diagnostic configuration settings at the site scope.
In turn, this enables you to apply different settings to, say, the Redmond site than you do on your other sites.

Note that you cannot create diagnostic configuration settings at the global scope; that's because the global scope already hosts these settings.
Likewise, you cannot create a new settings collection at the site scope if the specified site already contains diagnostic configuration settings.
For example, your command will fail if you try to create a new collection for the Redmond site and that site already hosts diagnostic configuration settings.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsDiagnosticConfiguration -Identity site:Redmond
```

The preceding command creates a new collection of diagnostic configuration settings for the Redmond site.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 creates a new collection of diagnostic configuration settings for the Redmond site.

New-CsDiagnosticConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 creates a new collection of diagnostic configuration settings for the Redmond site.

New-CsDiagnosticConfiguration -Identity site:Redmond

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
$x = New-CsDiagnosticsFilter -Fqdn fabrikam.com -Uri "sip:user@fabrikam.com" -Enabled $False 

New-CsDiagnosticConfiguration -Identity site:Redmond -Filter $x
```

The commands shown in Example 2 create a new diagnostics filter and then assign that filter to a new collection of diagnostic settings.
To carry out this task, the first command calls New-CsDiagnosticsFilter to create an in-memory-only diagnostics filter; this filter adds the FQDN fabrikam.com and the URI sip:user@fabrikam.com to the filter.
The command also sets the Enabled property to True ($True) in order to activate the filter.
The resulting virtual filter is then stored in the variable $x.

In command 2, New-CsDiagnosticConfiguration is used to create a new diagnostic configuration settings collection for the Redmond site.
These new settings will use the diagnostic filter stored in the variable $x.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 2 create a new diagnostics filter and then assign that filter to a new collection of diagnostic settings.
To carry out this task, the first command calls New-CsDiagnosticsFilter to create an in-memory-only diagnostics filter; this command adds the FQDN fabrikam.com and the URI sip:user@fabrikam.com to the filter.
The command also sets the Enabled property to True ($True) in order to activate the filter.
The resulting virtual filter is then stored in the variable $x.

In command 2, New-CsDiagnosticConfiguration is used to create a new diagnostic configuration settings collection for the Redmond site.
These new settings will use the diagnostic filter stored in the variable $x.

$x = New-CsDiagnosticsFilter -Fqdn fabrikam.com -Uri "sip:user@fabrikam.com" -Enabled $False

New-CsDiagnosticConfiguration -Identity site:Redmond -Filter $x

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 2 create a new diagnostics filter and then assign that filter to a new collection of diagnostic settings.
To carry out this task, the first command calls the New-CsDiagnosticsFilter cmdlet to create an in-memory-only diagnostics filter; this command adds the FQDN fabrikam.com and the URI sip:user@fabrikam.com to the filter.
The command also sets the Enabled property to True ($True) in order to activate the filter.
The resulting virtual filter is then stored in the variable $x.

In command 2, the New-CsDiagnosticConfiguration cmdlet is used to create a new diagnostic configuration settings collection for the Redmond site.
These new settings will use the diagnostic filter stored in the variable $x.

$x = New-CsDiagnosticsFilter -Fqdn fabrikam.com -Uri "sip:user@fabrikam.com" -Enabled $False

New-CsDiagnosticConfiguration -Identity site:Redmond -Filter $x

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
$x = New-CsDiagnosticConfiguration -Identity site:Redmond -InMemory
$x.LoggingShare = "\\atl-fs-001\logs"
Set-CsDiagnosticConfiguration -Instance $x
```

The commands shown in Example 3 demonstrate how you can create diagnostic configuration settings that initially exist only in memory.
To do this, the first command calls New-CsDiagnosticConfiguration along with two parameters: Identity (which specifies the Identity for the settings) and InMemory, which indicates that the new settings should be created in memory only.
The resulting object is stored in the variable $x.

After the virtual settings have been created, the second command is used to configure the LoggingShare property to the UNC path \\\\atl-fs-001\logs.
The final command is then used to transform the virtual diagnostic configuration settings into an actual collection of settings applied to the Redmond site.
Note that this final command is mandatory.
If you do not call Set-CsDiagnosticConfiguration, no settings will be applied to the Redmond site, and the virtual settings will disappear as soon as you end your Windows PowerShell session or delete the variable $x.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 3 demonstrate how you can create diagnostic configuration settings that initially exist only in memory.
To do this, the first command calls New-CsDiagnosticConfiguration along with two parameters: Identity (which specifies the Identity for the settings) and InMemory, which indicates that the new settings should be created in memory only.
The resulting object is stored in the variable $x.

After the virtual settings have been created, the second command is used to configure the LoggingShare property to the UNC path \\\\atl-fs-001\logs.
The final command is then used to transform the virtual diagnostic configuration settings into an actual collection of settings applied to the Redmond site.
Note that this final command is mandatory.
If you do not call Set-CsDiagnosticConfiguration, no settings will be applied to the Redmond site, and the virtual settings will disappear as soon as you end your Windows PowerShell session or delete the variable $x.

$x = New-CsDiagnosticConfiguration -Identity site:Redmond -InMemory

$x.LoggingShare = "\\\\atl-fs-001\logs"

Set-CsDiagnosticConfiguration -Instance $x

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 3 demonstrate how you can create diagnostic configuration settings that initially exist only in memory.
To do this, the first command calls the New-CsDiagnosticConfiguration cmdlet along with two parameters: Identity (which specifies the Identity for the settings) and InMemory, which indicates that the new settings should be created in memory only.
The resulting object is stored in the variable $x.

After the virtual settings have been created, the second command is used to configure the LoggingShare property to the UNC path \\\\atl-fs-001\logs.
The final command is then used to transform the virtual diagnostic configuration settings into an actual collection of settings applied to the Redmond site.
Note that this final command is mandatory.
If you do not call the Set-CsDiagnosticConfiguration cmdlet, no settings will be applied to the Redmond site, and the virtual settings will disappear as soon as you end your Windows PowerShell session or delete the variable $x.

$x = New-CsDiagnosticConfiguration -Identity site:Redmond -InMemory

$x.LoggingShare = "\\\\atl-fs-001\logs"

Set-CsDiagnosticConfiguration -Instance $x

## PARAMETERS

### -Identity
Unique identifier for the diagnostics configuration settings to be created.
Because new settings can only be created at the site scope you must use syntax similar to this: -Identity "site:Redmond".

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Collection of domains and URIs whose traffic will be logged if diagnostic filtering is enabled.
The Filter property consists of three separate items:

Fqdn - Collection of domains to be included in the filter.
(More technically, this is the host portion of a SIP address.) For example a fully qualified domain name (FQDN) might look like this: fabrikam.com.
Alternatively, you can use wildcards to represent multiple domains: *.fabrikam.com.
You can include more than one domain in a single filter.

Uri - Collection of URIs to be included in the filter.
(The Uri is the user@host portion of a SIP address.) A Uri can consist of any of the following patterns: user@fabrikam.com; user@*; *@fabrikam.com.
You can include multiple URIs in a single filter.

Enabled - Indicates whether or not the filter should be activated.

```yaml
Type: Filter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoggingShare
Shared folder where the diagnostic logs can be uploaded.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogAllSipHeaders
When set to False, only the core SIP headers are recorded in the logs.
Setting this value to False can help reduce the size of the log files.
When set to True, all SIP headers are logged.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
None.
New-CsDiagnosticConfiguration does not accept pipelined input.

###  
None.
The New-CsDiagnosticConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsDiagnosticConfiguration creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.DiagnosticFilterSettings.

###  
The New-CsDiagnosticConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.DiagnosticFilterSettings.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/9028d9c1-e812-4055-bdf0-59cb83c6f50f(OCS.14).aspx)

[Get-CsDiagnosticConfiguration](Get-CsDiagnosticConfiguration.md)

[New-CsDiagnosticsFilter](New-CsDiagnosticsFilter.md)

[Remove-CsDiagnosticConfiguration](Remove-CsDiagnosticConfiguration.md)

[Set-CsDiagnosticConfiguration](Set-CsDiagnosticConfiguration.md)

[Online Version](http://technet.microsoft.com/EN-US/library/9028d9c1-e812-4055-bdf0-59cb83c6f50f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/9028d9c1-e812-4055-bdf0-59cb83c6f50f(OCS.16).aspx)


