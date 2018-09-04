---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineUser
schema: 2.0.0
---

# Get-CsOnlineVoiceRoute

## SYNOPSIS
Returns information about the online voice routes configured for use in your tenant. Online voice routes contain instructions that tell Skype for Business Online how to route calls from Microsoft Phone System Direct Routing users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

## SYNTAX

### Identity (Default)
```
Get-CsOnlineVoiceRoute [-Tenant <Guid>] [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsOnlineVoiceRoute [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to retrieve one or more existing voice routes in your tenant. Voices routes contain instructions that tell Skype for Business Online how to route calls from Phone System users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

This cmdlet can be used to retrieve voice route information such as which online PSTN gateways the route is associated with (if any), which online PSTN usages are associated with the route, the pattern (in the form of a regular expression) that identifies the phone numbers to which the route applies, and caller ID settings. The PSTN usage associates the voice route to a online voice policy.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Get-CsOnlineVoiceRoute
```

Retrieves the properties for all voice routes defined within the tenant.

### -------------------------- Example 2 --------------------------
```
PS C:\> Get-CsOnlineVoiceRoute -Identity Route1
```

Retrieves the properties for the Route1 voice route.

### -------------------------- Example 3 --------------------------
```
PS C:\> Get-CsOnlineVoiceRoute -Filter *test*
```

This command displays voice route settings where the Identity contains the string "test" anywhere within the value. To find the string test only at the end of the Identity, use the value \*test. Similarly, to find the string test only if it occurs at the beginning of the Identity, specify the value test\*.

### -------------------------- Example 4 --------------------------
```
PS C:\> Get-CsOnlineVoiceRoute | Where-Object {$_.OnlinePstnGatewayList.Count -eq 0}
```

This command retrieves all voice routes that have not had any PSTN gateways assigned. First all voice routes are retrieved using the Get-CsOnlineVoiceRoute cmdlet. These voice routes are then piped to the Where-Object cmdlet. The Where-Object cmdlet narrows down the results of the Get operation. In this case we look at each voice route (that's what the $_ represents) and check the Count property of the PstnGatewayList property. If the count of PSTN gateways is 0, the list is empty and no gateways have been defined for the route.

## PARAMETERS

### -Filter
This parameter filters the results of the Get operation based on the wildcard value passed to this parameter.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A string that uniquely identifies the voice route. If no identity is provided, all voice routes for the organization are returned.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
This parameter is reserved for internal Microsoft use

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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsOnlineVoiceRoute](https://docs.microsoft.com/en-us/powershell/module/skype/new-csonlinevoiceroute?view=skype-ps)

[Set-CsOnlineVoiceRoute](https://docs.microsoft.com/en-us/powershell/module/skype/set-csonlinevoiceroute?view=skype-ps)

[Remove-CsOnlineVoiceRoute](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csonlinevoiceroute?view=skype-ps)
