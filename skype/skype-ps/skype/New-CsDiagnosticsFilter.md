---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsDiagnosticsFilter
schema: 2.0.0
---

# New-CsDiagnosticsFilter

## SYNOPSIS

Creates a new diagnostic filter to be used with diagnostic configuration settings.
Diagnostic configuration settings are used to determine whether traffic to or from a given domain or Uniform Resource Identifier (URI) is recorded in your Skype for Business Server log files.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsDiagnosticsFilter [-Enabled <Boolean>] [-ExcludeConferenceMessages <Boolean>]
 [-ExcludePresenceNotifications <Boolean>] [-ExcludeRegisterMessages <Boolean>] [-Fqdn <PSListModifier>]
 [-Uri <PSListModifier>] [-ExcludeSubscribeMessages <Boolean>] [-ExcludeSuccessfulRequests <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION

If you enable logging for Skype for Business Server, then, by default, traffic traveling to or from any domain or URI is included in those log files.
This ensures that as much information as possible is recorded in the log files.

On the other hand, this can also result in cases of too much information.
For example, if you are experiencing connectivity problems with a particular domain, you might want to limit logging to traffic between your network and that domain; that makes it easier for you to identify the relevant records and, in turn, might make it easier for you to diagnose and correct the problem.

Diagnostic configuration settings make it possible for you to specify the domains or URIs that will be recorded in the log files; for example, you might want to log only the traffic to or from specified domains.
In addition to the global settings, Skype for Business Server enables you to create diagnostic settings at the site scope or the service scope (for either the Edge Server or the Registrar service).
In turn, this enables you to apply different settings to the Redmond site than are applied to your other sites.

The New-CsDiagnosticsFilter cmdlet enables you to add a filter to a collection of diagnostic settings.
This collection contains the domains and URIs that will have their traffic recorded in the log files.
When a filter is added, only information pertaining to the domains and URIs in the filter will be logged; for logging purposes, traffic from other domains and URIs will be ignored.

Note that the New-CsDiagnosticsFilter cmdlet creates in-memory-only instances of a diagnostic filter.
After creating one of these virtual filters, you will then need to use either the New-CsDiagnosticConfiguration cmdlet or the Set-CsDiagnosticConfiguration cmdlet to add the filter to a collection.



## EXAMPLES


### -------------------------- EXAMPLE 1 -------------------------- 
```
$x = New-CsDiagnosticsFilter -Fqdn "fabrikam.com" -Enabled $False

Set-CsDiagnosticConfiguration -Identity global -Filter $x
```

The commands shown in Example 1 use the New-CsDiagnosticsFilter cmdlet to create a new diagnostic filter and then assign that filter to the global diagnostic configuration settings.
To carry out this task, the first command calls the New-CsDiagnosticsFilter cmdlet to create an in-memory-only diagnostic filter.
This filter adds the FQDN fabrikam.com and the URI user@fabrikam.com to the filter.
The command also sets the Enabled property to True ($True) in order to activate the filter.
The resulting virtual filter is then stored in the variable $x.

In the second command, the Set-CsDiagnosticConfiguration cmdlet is used to assign the new filter to the global diagnostic configuration settings.
In this case, any existing values in the Filter property will be replaced by the newly-created filter stored in $x.



### -------------------------- EXAMPLE 2 -------------------------- 
```
$x = New-CsDiagnosticsFilter -Fqdn "fabrikam.com","contoso.com" -Enabled $False

Set-CsDiagnosticConfiguration -Identity global -Filter $x

```

The commands shown in Example 2 are a variation of the commands shown in Example 1; in Example 2, however, two FQDNs (fabrikam.com and contoso.com) are added to the filter's Fqdn property.
To do this, both names (separated by a comma) are used as parameter values for the Fqdn parameter.


## PARAMETERS

### -Enabled
Indicates whether or not the filter should be employed.
The default value is True ($True).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeConferenceMessages
If set to True, information about conference messages (that is, any message with a conference URI in its To or From header) will not be recorded in the log files.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludePresenceNotifications
If set to True, information about presence notifications (that is, any message that uses the NOTIFY or BENOTIFY method) will not be recorded in the log files.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeRegisterMessages
If set to True, information about client registrations (that is, any message that uses the REGISTER method) will not be recorded in the log files.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fqdn
Collection of domains to be included in the filter.
(More technically, these domains represent the host portion of a SIP address.) For the FQDN property you can use a fully qualified domain name (FQDN) like this: fabrikam.com.
Alternatively, you can use wildcards to represent multiple domains: *.fabrikam.com.
You can have more than one domain in a single filter.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Uri
Collection of URIs to be included in the filter.
(The URI is the user@host portion of a SIP address.) A URI can consist of any of the following patterns:

user@fabrikam.com

user@*

*@fabrikam.com

You can include multiple URIs in a single filter.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeSubscribeMessages

If set to True, information about client subscriptions (that is, any message that uses the SUBSCRIBE method) will not be recorded in the log files.
The default value is False.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeSuccessfulRequests
If set to True.
Information about successful SIP requests will not be recorded in the log files.
Instead, only information about unsuccessful requests will be saved.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsDiagnosticsFilter cmdlet does not accept pipelined input.

## OUTPUTS


###  
The New-CsDiagnosticsFilter cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.Filter object.

## NOTES

## RELATED LINKS

[New-CsDiagnosticConfiguration](New-CsDiagnosticConfiguration.md)

[Set-CsDiagnosticConfiguration](Set-CsDiagnosticConfiguration.md)

