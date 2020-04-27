---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsTenantBlockedCallingNumbers
schema: 2.0.0
manager: roykuntz
author: junya
ms.author: junya
---

# Get-CsTenantBlockedCallingNumbers

## SYNOPSIS
Use the Get-CsTenantBlockedCallingNumbers cmdlet to retrieve tenant blocked calling numbers setting.

## SYNTAX

```
Get-CsTenantBlockedCallingNumbers [[-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>] [-LocalStore]
 [-AsJob]
```

## DESCRIPTION
Skype for Business Online Calling Plans now supports blocking of inbound calls from the public switched telephone network (PSTN). This feature allows a tenant-global list of number patterns to be defined so that the caller ID of every incoming PSTN call to the tenant can be checked against the list for a match. If a match is made, an incoming call is rejected.

The tenant blocked calling numbers includes a list of inbound blocked number patterns. Number patterns are managed through the CsInboundBlockedNumberPattern commands New, Get, Set, and Remove. You can manage a given pattern by using these cmdlets, including the ability to toggle the activation of a given pattern. 

The scope of tenant blocked calling numbers is global across the given tenant.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsTenantBlockedCallingNumbers
```

This example returns the tenant global settings for blocked calling numbers. It includes a list of inbound blocked number patterns.

## PARAMETERS

### -Filter
The Filter parameter allows you to limit the number of results based on filters you specify.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter is a unique identifier that designates the scope, and for per-user scope a name, which identifies the TenantBlockedCallingNumbers to retrieve.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
PARAMVALUE: SwitchParameter

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
Specifies the globally unique identifier (GUID) of your Skype for Business Online tenant account.
For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308".
You can find your tenant ID by running this command: Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

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

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
[Set-CsTenantBlockedCallingNumbers](Set-CsTenantBlockedCallingNumbers.md)