---
external help file:Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsHybridApplicationEndpoint
schema: 2.0.0
---

# New-CsHybridApplicationEndpoint

## SYNOPSIS
Creates a Skype for Business application endpoint to the Skype for Business Server users if Hybrid connectivity has been deployed in the environment.

This cmdlet was introduced in the July 2017 cumulative update for the Lync Server 2013 and May 2017 cumulative update for Skype Business Server 2015.

## SYNTAX

```
New-CsHybridApplicationEndpoint -OU <OUIdParameter> -DisplayName <String> -SipAddress <String>
 -ApplicationId <Guid> [-LineUri <String>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business application endpoint can be connected to the Skype for Business Server users if Hybrid connectivity has been deployed in the environment.

Hybrid connectivity between Skype for Business Server and Skype for Business Online means users of a domain, such as contoso.com, are split between using Skype for Business Server on premises and Skype for Business Online. Some of the domain users are homed on premises, and some users are homed online. Application endpoint will be configured as online users reachable by the on-premises users.

Before `New-CsHybridApplicationEndpoint` you must run `New-CsOnlineApplicationEndpoint` to register your application endpoint in Skype for Business Online. Please make sure that the `New-CsHybridApplicationEndpoint` parameters: ApplicationId, DisplayName and SipAddress have the same values as `New-CsOnlineApplicationEndpoint` parameters: ApplicationID, Name and Uri, respectively.  

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> New-CsHybridApplicationEndpoint -ApplicationId 41ec7d50-ba91-1208-73ee-136b88859725 -DisplayName NewBot1 -SipAddress sip:newbot1@litwareinc.com –OU "ou=Redmond,dc=litwareinc,dc=com"
```

This example creates a hybrid application endpoint named NewBot1 in Skype for Business Server. This application was created using the Skype for Business Bot Framework which allows you to build and connect intelligent bots to interact with your Skype for Business users using text, cards, or speech.

## PARAMETERS

### -ApplicationId
The ApplicationId or Client Id for which the endpoint is being created

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
Friendly name for the application endpoint.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LineUri
Valid phone number for the application endpoint. (Not currently supported through BOT framework)

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
Active Directory Organizational Unit (OU) for the disabled user to be created. Wait for the newly created user object to be directory synced to the Azure Active Directory or start a new directory sync cycle by running the [Start-ADSyncSyncCycle](https://docs.microsoft.com/en-us/azure/active-directory/connect/active-directory-aadconnectsync-feature-scheduler#start-the-scheduler) on the domain controller machine.

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddress
The SipUri for the Endpoint. SIP Uri must be lowercase.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs. The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
[Get-CsHybridApplicationEndpoint](https://docs.microsoft.com/en-us/powershell/module/skype/get-cshybridapplicationendpoint?view=skype-ps)

[Set-CsHybridApplicationEndpoint](https://docs.microsoft.com/en-us/powershell/module/skype/set-cshybridapplicationendpoint?view=skype-ps)

[Remove-CsHybridApplicationEndpoint](https://docs.microsoft.com/en-us/powershell/module/skype/remove-cshybridapplicationendpoint?view=skype-ps)
