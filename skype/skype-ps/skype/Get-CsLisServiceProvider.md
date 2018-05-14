---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsLisServiceProvider
schema: 2.0.0
---

# Get-CsLisServiceProvider

## SYNOPSIS
Retrieves information about the web service provided by the Enhanced 9-1-1 (E9-1-1) Network Routing Provider to validate locations.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsLisServiceProvider [<CommonParameters>]
```

## DESCRIPTION
In an Enterprise Voice implementation with E9-1-1, emergency calls must first be routed through an E9-1-1 Network Routing Provider to ensure that the calls are routed to the appropriate Public Safety Answering Point (PSAP).
(A PSAP is the agency in the United States that directs the calls to the nearest emergency services, such as police, fire, and ambulance services.) In order to do this, the provider must have a list of locations from the organization that it can then match against the Master Street Address Guide to ensure all locations are valid.
This cmdlet retrieves information about a provider, including the name of the provider and a URL for the web service that the organization will use to send the locations.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsLisServiceProvider
```

The Get-CsLisServiceProvider cmdlet does not have any parameters (other than the Windows PowerShell common parameters, such as Verbose).
There will never be more than one service provider for an E9-1-1 implementation, so this cmdlet will retrieve information about the web service provided by that service provider.


## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Management.Automation.PSCustomObject


## NOTES


## RELATED LINKS

[Remove-CsLisServiceProvider](Remove-CsLisServiceProvider.md)

[Set-CsLisServiceProvider](Set-CsLisServiceProvider.md)
