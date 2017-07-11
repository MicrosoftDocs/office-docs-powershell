---
applicable: Lync Server 2013, Skype for Business Online
schema: 2.0.0
---

# Copy-CsVoicePolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Copies an existing per-user voice policy to an Office 365 tenant.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Online

Copy-CsVoicePolicy \[\[-Identity\] \<XdsIdentity\>\] -PolicyName \<string\> -Tenant \<guid\> \[-LocalStore\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[\<CommonParameters\>\]



## SYNTAX

```
Copy-CsVoicePolicy [[-Identity] <XdsIdentity>] -PolicyName <String> -Tenant <Guid> [-Force] [-LocalStore]
 [-BypassDualWrite <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The Copy-CsVoicePolicy allows you to take an existing per-user voice policy and then assign a copy of that policy to an Office 365 tenant.
When using this cmdlet, keep in mind that you are creating and assigning a copy of the per-user policy in question.
For example, suppose you have a voice policy named RedmondVoicePolicy that you assign to an Office 365 tenant.
If you later make a change to RedmondVoicePolicy, that change will not be reflected in the copy of the policy assigned to the Office 365 tenant.
If you want the same change made to the tenant policy, then you will need to use the Set-CsVoicePolicy command to modify the tenant policy.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Copy-CsVoicePolicy"}

Lync Server Control Panel: The functions carried out by the Copy-CsVoicePolicy cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Online

{{Fill in the Description}}



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 copies the per-user voice policy RedmondVoicePolicy to the tenant with the TenantID 38aad667-af54-4397-aaa7-e94c79ec2308.

Copy-CsVoicePolicy -PolicyName "RedmondVoicePolicy" -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -PolicyName
Below Content Applies To: Lync Server 2013

Identity of the per-user policy being copied.
For example:

-PolicyName "tag:NorthAmericaVoicePolicy"

Note that you do not have to include the "tag:" prefix when specifying the PolicyName:

-PolicyName "NorthAmericaVoicePolicy"



Below Content Applies To: Skype for Business Online

{{Fill PolicyName Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Below Content Applies To: Lync Server 2013

Globally unique identifier (GUID) of the tenant account where the policy will be copied.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



Below Content Applies To: Skype for Business Online

{{Fill Tenant Description}}



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Below Content Applies To: Lync Server 2013

Suppresses the display of any non-fatal error message that might arise when running the command.



Below Content Applies To: Skype for Business Online

{{Fill Force Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Below Content Applies To: Lync Server 2013

Scope for the copied policy.
Because the only allowed value is "global" you can omit this parameter when calling Copy-CsVoicePolicy.



Below Content Applies To: Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Below Content Applies To: Lync Server 2013

Retrieves the voice policy data from the local replica of the Central Management store rather than from the Central Management store itself.



Below Content Applies To: Skype for Business Online

{{Fill LocalStore Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Copy-CsVoicePolicy does not accept pipelined input.

### None

## OUTPUTS

###  
Copy-CsVoicePolicy creates new instance of the Microsoft.Rtc.Management.WritableConfig.Voice.VoicePolicy object.

### System.Object

## NOTES

## RELATED LINKS

[Get-CsVoicePolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/0b05cd9a-234b-4bcc-bae7-fc9ad75beffa(OCS.15).aspx)

