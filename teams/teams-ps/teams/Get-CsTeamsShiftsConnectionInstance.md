---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsShiftsConnectionInstance
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://docs.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectioninstance
schema: 2.0.0
---

# Get-CsTeamsShiftsConnectionInstance

## SYNOPSIS

This cmdlet returns the list of existing connection instances. It can also return the configuration details for a given connection instance.

## SYNTAX

```
Get-CsTeamsShiftsConnectionInstance [[-ConnectorInstanceId] <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet returns the list of existing connections. It can also return the configuration details for a given connection instance.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionInstance
```
```output
ConnectorAdminEmail     DesignatedActorId                     EnabledConnectorScenario                               EnabledWfiScenario                                             Etag                                   Id                                       Name                                   SyncFrequencyInMin TenantId
-------------------     -----------------                     ------------------------                               ------------------                                             ----                                   --                                       ----                                   ------------------ --------
user@contoso.com    12345fa7-e92b-40fb-99a7-2d23b3404712 {Shift, SwapRequest, UserShiftPreferences, OpenShift...} {Shift, TimeOffRequest}                                        "1d004f54-0000-0400-0000-60ce37120000" WCI-01c84e58-9a03-4e56-82f1-6b224132cad8   Test connector instance-1					10                 dfd24b34-ccb0-47e1-bdb...
user1@contoso.com    12345faf-fd37-4a4d-ab25-ba0b037cb567 {Shift, SwapRequest, OpenShift, OpenShiftRequest...}     {Shift, SwapRequest, OpenShift, TimeOff...}                      "21007c43-0000-0400-0000-60d061300000" WCI-0e2af164-1dcf-4854-8551-631aeda3b437   Test connector instance-2					10                 dfd24b34-ccb0-47e1-bdb...
user2@contoso.com    123451a9-e74b-4ff0-afe8-ff9dbe824e7f {Shift, SwapRequest, OpenShift, OpenShiftRequest...}     {Shift, SwapRequest, OpenShift, TimeOff...}                      "2100d271-0000-0400-0000-60d07d980000" WCI-8293ff48-f41a-4f00-8cb9-75ac7a01f6d5   Test connector instance-3					10                 dfd24b34-ccb0-47e1-bdb...
user3@contoso.com    12345fa7-e92b-40fb-99a7-2d23b3404712 {Shift, SwapRequest, OpenShift, OpenShiftRequest...}     {Shift, SwapRequest, OpenShift, TimeOff...}                      "23005736-0000-0400-0000-60d10a990000" WCI-922cb572-369d-42d2-969a-d4927cd3683b   Test connector instance-4					10                 dfd24b34-ccb0-47e1-bdb...
user4@contoso.com    12345b9a-6161-4f6a-9067-9ec3eb881e56 {Shift, SwapRequest, UserShiftPreferences, OpenShift...} {Shift, SwapRequest, UserShiftPreferences, OpenShift...}         "2300589a-0000-0400-0000-60d132270000" WCI-da788d04-1bd2-48b1-a261-1dd80bde86db   Test connector instance-5					10                 dfd24b34-ccb0-47e1-bdb...
```

Returns the list of connection instances.

### Example 2
```powershell
PS C:\> Get-CsTeamsShiftsConnectionInstance -ConnectorInstanceId "WCI-01c84e59-9a03-4e56-82f1-6b224132cad8"
```
```output
ConnectorAdminEmail        DesignatedActorId                    EnabledConnectorScenario                               EnabledWfiScenario      Etag                                   Id                                       Name                      SyncFrequencyInMin TenantId                             WorkforceIntegrationId
-------------------        -----------------                    ------------------------                               ------------------      ----                                   --                                       ----                      ------------------ --------                             ----------------------
user@contoso.com        12345fa7-e92b-40fb-99a7-2d23b3412345 {Shift, SwapRequest, UserShiftPreferences, OpenShift...} {Shift, TimeOffRequest}   "1d004f54-0000-0400-0000-60ce37120000"  WCI-01c84e58-9a03-4e56-82f1-6b224132cad8  Test Connector Instance3 10                 12345b34-ccb0-47e1-bdb7-e49db9c7c14a WFI_3fd79702-15e4-4c97-9b0e-dd725e92c...
```

Returns the connection instance with ID `WCI-01c84e59-9a03-4e56-82f1-6b224132cad8`.

## PARAMETERS

### -ConnectorInstanceId

The ID of the connection instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsTeamsShiftsConnectionInstance](New-CsTeamsShiftsConnectionInstance.md)

[Set-CsTeamsShiftsConnectionInstance](Set-CsTeamsShiftsConnectionInstance.md)

[Test-CsTeamsShiftsConnectionValidate](Test-CsTeamsShiftsConnectionValidate.md)

[Remove-CsTeamsShiftsConnectionInstance](Remove-CsTeamsShiftsConnectionInstance.md)
