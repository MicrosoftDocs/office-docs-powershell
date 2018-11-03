---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: New-CsEdgeAllowAllKnownDomains
schema: 2.0.0
---

# New-CsEdgeAllowAllKnownDomains

## SYNOPSIS
Enables Skype for Business Online federation with all domains except for those domains included on the blocked domains list.

## SYNTAX

```
New-CsEdgeAllowAllKnownDomains [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Federation is a service that enables users to exchange IM and presence information with users from other domains.
With Skype for Business Online, administrators can use the federation configuration settings to govern:

Whether or not users can communicate with people from other domains and, if so, which domains they are allowed to communicate with.

Whether or not users can communicate with people who have accounts on public IM and presence providers such as Windows Live, AOL, and Yahoo.

Federation is managed, in part, by using allowed domain and blocked domain lists.
The allowed domain list specifies the domains that users are allowed to communicate with; the blocked domain list specifies the domains that users are not allowed to communicate with.
By default, users can communicate with any domain that does not appear on the blocked list.
However, administrators can modify this default setting and limit communication to domains that are on the allowed domains list.

Skype for Business Online does not allow you to directly modify the allowed list or the blocked list; for example, you cannot use a command similar to this one, which passes a string value representing a domain name to the allowed domains list:

`Set-CsTenantFederationConfiguration -AllowedDomains "fabrikam.com"`

Instead, you must use either the New-CsEdgeAllowAllKnownDomains cmdlet or the New-CsEdgeAllowList cmdlet to create a domain object and then pass that domain object to the Set-CsTenantFederationConfiguration cmdlet.
The New-CsEdgeAllowAllKnownDomains cmdlet is used if you want to allow users to communicate with all domains except for those expressly specified on the blocked domains list.
The New-CsEdgeAllowList cmdlet is used if you want to limit user communication to a specified collection of domains.
In that case, users will only be allowed to communicate with domains that appear on the allowed domains list.

To configure federation with all known domains, use a set of commands similar to this:

`$x = New-CsEdgeAllowAllKnownDomains`

`Set-CsTenantFederationConfiguration -AllowedDomains $x`

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
$x = New-CsEdgeAllowAllKnownDomains

Set-CsTenantFederationConfiguration -AllowedDomains $x
```

The two commands shown in Example 1 configure the federation settings for the current tenant to allow all known domains.
To do this, the first command in the example uses the New-CsEdgeAllowAllKnownDomains cmdlet to create an instance of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.AllowAllKnownDomains object; this instance is stored in a variable named $x.
In the second command, the Set-CsTenantFederationConfiguration cmdlet is called along with the AllowedDomains parameter; using $x as the parameter value configures the federation settings to allow all known domains.



## PARAMETERS

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
The New-CsEdgeAllowAllKnownDomains cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsEdgeAllowAllKnownDomains cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.AllowAllKnownDomains object.

## NOTES

## RELATED LINKS

[Set-CsTenantFederationConfiguration](Set-CsTenantFederationConfiguration.md)


