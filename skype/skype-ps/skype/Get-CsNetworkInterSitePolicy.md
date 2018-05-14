---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsNetworkInterSitePolicy
schema: 2.0.0
---

# Get-CsNetworkInterSitePolicy

## SYNOPSIS
Retrieves one or more network inter-site policies, which define bandwidth limitations between sites that are directly linked within a call admission control (CAC) configuration.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsNetworkInterSitePolicy [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsNetworkInterSitePolicy [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
When network sites share a direct link, bandwidth limitations for audio and video connections can be defined between those two sites.
This cmdlet retrieves one or more network site policies that associate bandwidth limitation settings with directly connected sites.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsNetworkInterSitePolicy
```

Calling the Get-CsNetworkInterSitePolicy cmdlet with no parameters retrieves all network site policies defined between two directly linked network sites.



### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsNetworkInterSitePolicy -Identity Reno_Portland
```

This example retrieves the network site policy with the Identity Reno_Portland.



### -------------------------- Example 3 --------------------------
```
Get-CsNetworkInterSitePolicy -Filter *Reno*
```

Example 3 retrieves all network site policies that have the string Reno anywhere within the Identity value.
The wildcard characters (*) within the value passed to the Filter parameter signify "any character or set of characters." In other words, the string *Reno* will match Identity values that begin with any character or characters, followed by the string Reno, followed by any character or characters.



### -------------------------- Example 4 --------------------------
```
Get-CsNetworkInterSitePolicy | Where-Object {$_.BWPolicyProfileID -eq $null}
```

This example retrieves all network site policies that do not have a bandwidth policy profile assigned.
The command begins by calling the Get-CsNetworkInterSitePolicy cmdlet, which, as we saw in Example 1, retrieves a collection of all network site policies.
This collection is then piped to the Where-Object cmdlet.
The Where-Object cmdlet narrows the collection down to only those site policies that don't have a bandwidth policy profile assigned.
It does this by comparing to see if the BWPolicyProfileID property of each site policy is equal to (-eq) Null ($null).



## PARAMETERS

### -Identity
The unique identifier of the network site policy you want to retrieve.
Network site policies are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is a unique name that identifies that policy.

```yaml
Type: XdsGlobalRelativeIdentity
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
A string containing wildcard characters that will search for policies with Identity values matching the wildcard string.

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
Retrieves the network inter-site policy information from the local replica of the Central Management store, rather than the Central Management store itself.

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

### Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.InterNetworkSitePolicyType


## NOTES


## RELATED LINKS

[New-CsNetworkInterSitePolicy](New-CsNetworkInterSitePolicy.md)

[Remove-CsNetworkInterSitePolicy](Remove-CsNetworkInterSitePolicy.md)

[Set-CsNetworkInterSitePolicy](Set-CsNetworkInterSitePolicy.md)
