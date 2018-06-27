---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Update-CsTenantMeetingUrl
schema: 2.0.0
---

# Update-CsTenantMeetingUrl

## SYNOPSIS
Updates the meeting URL for the specified Skype for Business Online tenant.
The updated URL uses a simpler, more standardized format that makes it easier for clients to locate and connect to meetings.

## SYNTAX

```
Update-CsTenantMeetingUrl [-BypassDualWrite <Object>] [-Confirm] [-Force] [-Tenant <Object>] [-WhatIf] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
The `Update-CsTenantMeetingUrl` updates the Skype for Business Online meeting URL to a simpler and more standardized format; this helps eliminate problems that occasionally occurred with the original meeting URL.
For example, suppose an organization sets up an Office 365 domain with the name contoso.onmicrosoft.com.
When they do that, meetings will have URLs similar to this:

https://meet.lync.com/onmicrosoft/contoso/user1/45GZFH99

Now, suppose the organization undergoes some changes and decides to use the "vanity" URL litwareinc.com instead of the onmicrosoft.com URL.
The organization modifies their user email addresses to use the litwareinc.com domain.
However, meeting URLs will still use the old domain name:

https://meet.lync.com/contoso/user1/45GZFH99

To fix this problem, administrators should run the `Update-CsTenantMeetingUrl` cmdlet.
That will replace the old meeting URL with a new one that features the vanity URL instead:

https://meet.lync.com/litwareinc.com/user1/37JYLP71

Running the `Update-CsTenantMeetingUrl` cmdlet is the only way to make this change.

Note that, when you run `Update-CsTenantMeetingUrl`, your Skype for Business Online tenant will switch to the new URL immediately.
That will not create any problems for new meetings that your users might schedule: those meetings will automatically be scheduled using the new URL.
However, previously-scheduled meetings will run into problems; that's because they were scheduled using the older, defunct meeting URL.
The only way to address this issue is to have your users reschedule those meetings.

Because this could potentially create problems in some organizations (particularly organizations where a large number of meetings have already been scheduled), by default `Update-CsTenantMeetingUrl` will prompt you before actually updating the meeting URL:

WARNING: This is a breaking change for users in this tenant.
Meeting URL configuration will be updated!Old meeting URLs will no longer function.
This change cannot be reverted.
Are you sure you want to continue?
\[Y\] Yes \[A\] Yes to All \[N\] No \[L\] No to All \[S\] Suspend \[?\] Help (default is "Y"):

You must answer "Yes" or "Yes to All" before the command will actually be executed; if you answer "No" then the command will be cancelled and the meeting URL will not be updated.
Keep in mind that once the meeting URL has been changed there is no way to revert back to the original URL.
Once the command executes the URL will be changed and all previously-scheduled meetings will need to be rescheduled.
This also means that you only need to run this command once per tenant.
There is no need to periodically run and the command and re-update the meeting URL.

If you prefer to run the command without having to address the confirmation prompt, you can include the Force parameter.
In that case, `Update-CsTenantMeetingUrl` will run without displaying the confirmation prompt:

WARNING: This is a breaking change for users in this tenant.
Meeting URL configuration will be updated!

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Update-CsTenantMeetingUrl -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"
```

The command shown in Example 1 updates the meeting URL for the tenant with the tenant ID 38aad667-af54-4397-aaa7-e94c79ec2308.
(Note that you must supply the tenant ID in order for this command to complete.) After pressing ENTER to run the command, you will be asked if you are sure you want to update the meeting URL.
You must answer yes to this prompt before `Update-CsTenantMeetingUrl` will actually make any changes to your Skype for Business Online configuration settings.


### -------------------------- Example 2 --------------------------
```
Update-CsTenantMeetingUrl -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308" -Force
```

Example 2 also updates the meeting URL for the tenant with the tenant ID 38aad667-af54-4397-aaa7-e94c79ec2308.
In this case, however, the Force parameter is included; this bypasses the confirmation prompt that typically appears when you run `Update-CsTenantMeetingUrl`.
In this case, as soon as you press ENTER the command will run and your Skype for Business Online configuration settings will be modified.


## PARAMETERS

### -BypassDualWrite
PARAMVALUE: $true | $false

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

### -Confirm
Prompts you for confirmation before executing the command.

Note that the default behavior of the `Update-CsMeetingUrl` is to display the confirmation prompt before making any updates.
That means that, if you want to display the confirmation prompt, you do not need to include the Confirm parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of the confirmation prompt which would otherwise appear before `Update-CsMeetingUrl` makes any updates.

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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose federation settings are being returned.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return your tenant ID by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

If you do not include the Tenant parameter then `Update-CsMeetingUrl` will prompt you to enter that parameter before you can continue.

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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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
Update-CsMeetingUrl does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Get-CSSimpleUrlConfiguration](Get-CSSimpleUrlConfiguration.md)

