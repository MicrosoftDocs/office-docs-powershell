---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsBandwidthPolicyServiceConfiguration
schema: 2.0.0
---

# Get-CsBandwidthPolicyServiceConfiguration

## SYNOPSIS
Retrieves one or more bandwidth policy service configurations.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsBandwidthPolicyServiceConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsBandwidthPolicyServiceConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Call admission control (CAC) is a way of determining whether to allow real-time communications sessions, such as voice or video calls, to be established based on bandwidth constraints.
Within the Skype for Business Server implementation of CAC, regions, sites, and subnets are defined within a network along with the relationships and links between those entities in order to place bandwidth constraints between them.
Bandwidth Policy service is the component that performs CAC functionality in the Skype for Business Server deployment, enabling the decision as to whether sufficient bandwidth exists for a call to be established.
The Get-CsBandwidthPolicyServiceConfiguration cmdlet retrieves settings for one or more bandwidth policy services.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsBandwidthPolicyServiceConfiguration
```

Example 1 retrieves all bandwidth policy service configurations defined within the Skype for Business Server implementation.

### -------------------------- Example 2 --------------------------
```
Get-CsBandwidthPolicyServiceConfiguration -Identity site:Redmond
```

This example retrieves the bandwidth policy service configuration defined for the Redmond site (-Identity site:Redmond).

### -------------------------- Example 3 --------------------------
```
Get-CsBandwidthPolicyServiceConfiguration -Filter site:*
```

In this example we use the Filter parameter to retrieve all bandwidth policy service configurations defined at the site level.
We do this by passing the value site:* to the Filter parameter.
This will search the Identity property of all bandwidth policy service configurations for values that begin with site: and are followed by any other characters.
Because all site-level configurations have Identity values beginning with site: and followed by the name of the site, this filter will find all configurations for all sites.

### -------------------------- Example 4 --------------------------
```
Get-CsBandwidthPolicyServiceConfiguration | Where-Object {$_.MaxLogFileSizeMb -gt 4}
```

Example 4 retrieves all bandwidth policy service configurations that allow log files to reach sizes greater than four megabytes.
The example begins with a call to the Get-CsBandwidthPolicyServiceConfiguration cmdlet.
As in Example 1, this cmdlet retrieves a collection of all configurations defined within the Skype for Business Server deployment.
This collection is then piped to the Where-Object cmdlet.
The Where-Object cmdlet cycles through the collection one item at a time.
For each item in the collection, the Where-Object cmdlet checks to see whether the value of the MaxLogFileSizeMb property is greater than (-gt) 4.
If it is, that item remains part of the collection and is part of the command output.
If the value of MaxLogFileSizeMb is not greater than 4, the item is ignored and will not be returned.


## PARAMETERS

### -Identity
The unique identifier of the configuration you want to retrieve.
This identifier will consist of the scope (for the global configuration) or the scope and name (for a site-level configuration, such as site:Redmond).

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
A string containing one or more wildcard characters that will be used to search the Identity property of all bandwidth policy service configurations to find every configuration with an Identity that matches the wildcard pattern.
For example, the Filter value site:* will retrieve all configurations with Identity values that begin with the string site: and end with any set of characters.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the bandwidth policy service configuration from the local replica of the Central Management store, rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.BandwidthPolicyServiceConfiguration.BandwidthPolicyServiceConfiguration


## NOTES


## RELATED LINKS

[New-CsBandwidthPolicyServiceConfiguration](New-CsBandwidthPolicyServiceConfiguration.md)

[Remove-CsBandwidthPolicyServiceConfiguration](Remove-CsBandwidthPolicyServiceConfiguration.md)

[Set-CsBandwidthPolicyServiceConfiguration](Set-CsBandwidthPolicyServiceConfiguration.md)
